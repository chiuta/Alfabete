// Alfabete — braille grad 2 PARȚIAL (doar engleză, semne-cuvânt). Vectorii vin din NFB Braille lecția 4 (§4.2–4.3):
// and=12346, for=123456, of=12356, the=2346, with=23456; semnele alfabetice = celula literii (but=b, can=c, ... as=z).
// Rulare: node tests/braille-g2.test.mjs
import {createRequire} from 'module'; import path from 'node:path'; import {fileURLToPath, pathToFileURL} from 'node:url';
const require = createRequire(process.env.PW_ROOT || '/opt/node-tools/package.json');
const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
let pass = 0, fail = 0; const eq = (a, b, m) => { if (JSON.stringify(a) === JSON.stringify(b)) pass++; else { fail++; console.log('  FAIL', m, JSON.stringify(a), '!=', JSON.stringify(b)); } };
const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium'});
const ctx = await browser.newContext(); await ctx.route(/^https?:/, r => r.abort());
const P = await ctx.newPage(); const errs = []; P.on('pageerror', e => errs.push(e.message));
await P.goto(pathToFileURL(path.resolve(HERE, '..', 'index.html')).href + '#braille'); await P.waitForSelector('#panel-title');
const enc = (txt, g2) => P.evaluate(([t, g]) => { const r = ALF.BR.encode(t, undefined, {g2: g}); return [ALF.BR.cellsToUnicode(r.cells), r.contracted]; }, [txt, g2]);
// strong wordsigns (ASCII braille & = ! ) ( din sursă)
eq((await enc('the', true))[0], '⠮', 'the'); eq((await enc('and', true))[0], '⠯', 'and'); eq((await enc('for', true))[0], '⠿', 'for');
eq((await enc('of', true))[0], '⠷', 'of'); eq((await enc('with', true))[0], '⠾', 'with');
// semne alfabetice: fiecare cuvânt = celula literei
const AW = await P.evaluate(() => ALF.BR.WORDSIGNS); eq(Object.keys(AW).length, 23, '23 semne alfabetice');
for (const [w, l] of Object.entries(AW)) { const [u, n] = await enc(w, true), exp = await P.evaluate(l => ALF.BR.cellsToUnicode([ALF.BR.LET[l]]), l); eq([u, n], [exp, 1], w); }
eq((await enc('but', true))[0], '⠃', 'but = ⠃'); eq((await enc('it', true))[0], '⠭', 'it = ⠭ (x)'); eq((await enc('as', true))[0], '⠵', 'as = ⠵ (z)');
// majuscule
eq((await enc('The', true))[0], '⠠⠮', 'The'); eq((await enc('THE', true))[0], '⠠⠠⠮', 'THE'); eq((await enc('But so', true))[0], '⠠⠃⠀⠎', 'But so');
// cuvinte care NU se contractă: nu sunt în listă, părți din alt cuvânt, apostrof/cratimă/bară/cifră în contact
eq((await enc('cat', true)), ['⠉⠁⠞', 0], 'cat'); eq((await enc('butter', true))[1], 0, 'butter'); eq((await enc("it's", true))[1], 0, "it's neschimbat");
eq((await enc('but-so', true))[1], 0, 'cratimă'); eq((await enc('and/or', true))[1], 0, 'bară'); eq((await enc('so2', true))[1], 0, 'cifră');
eq((await enc('the cat and the dog.', true))[1], 3, 'the cat and the dog. = 3 semne'); eq((await enc('the cat and the dog.', true))[0], '⠮⠀⠉⠁⠞⠀⠯⠀⠮⠀⠙⠕⠛⠲', 'frază');
// fără opțiune: grad 1 neschimbat
eq((await enc('the', false)), ['⠞⠓⠑', 0], 'grad 1 neschimbat'); eq((await enc('the')), ['⠞⠓⠑', 0], 'implicit grad 1');
// UI
await P.click('.subtabs button[data-id="conv"]');
await P.waitForSelector('#br-g2');
const ta = P.locator('#main textarea').first(); await ta.fill('the cat and the dog');
await P.check('#br-g2'); await P.waitForTimeout(250);
const outTxt = await P.locator('#main textarea').nth(1).inputValue();
eq(outTxt, '⠮⠀⠉⠁⠞⠀⠯⠀⠮⠀⠙⠕⠛', 'UI: ieșire cu semne-cuvânt');
await P.uncheck('#br-g2'); await P.waitForTimeout(250);
eq(await P.locator('#main textarea').nth(1).inputValue(), '⠞⠓⠑⠀⠉⠁⠞⠀⠁⠝⠙⠀⠞⠓⠑⠀⠙⠕⠛', 'UI: grad 1 când e debifat');
eq(errs, [], 'fără erori JS');
await browser.close(); console.log(`\n${pass} reușite, ${fail} eșuate`); process.exit(fail ? 1 : 0);
