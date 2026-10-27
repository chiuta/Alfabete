# Jurnal de modificări — Alfabete

## 2.2.0 — 2026-10-27 (anterior: 2.1.0)

- Braille grad 2 PARȚIAL, doar engleză (bifă în Convertor): 23 de semne-cuvânt alfabetice + and/for/of/the/with ca cuvinte întregi, din NFB lecția 4 și Paths to Literacy lecția 5. Cuvintele lipite de apostrof/cratimă/bară/cifră rămân necontractate. Decodarea rămâne grad 1. Texte în 8 limbi (fr/it/es/pt/hu/de: traducere automată).
- Test nou `tests/braille-g2.test.mjs` (48 de verificări).
- Nu implementat: UEB grad 2 complet (semne de grup, forme scurte, reguli pentru cuvinte compuse) și orice grad 2 pentru română (fără sursă oficială).

## 2.1.0 — 2026-10-27 (anterior: 1.0.1)

- Nou: rundă cronometrată de 60 s la toți antrenorii (trecere automată la următoarea întrebare, scor final, cel mai bun rezultat păstrat local în `stats`), în 8 limbi. Testat în jsdom (pornire, trecere la următoarea întrebare, încheiere, salvarea celui mai bun scor).
- Versiunea a fost convertită la schema 2.x.y (anterior: 1.0.1).
- README: „Stare: stabil”, „Offline: complet”.
- Existau deja (nemodificate): audio Morse (WPM/Farnsworth, lumină, vibrație, WAV), avertismentul despre cifrele clasice.
- Nu implementat: braille grad 2 (planificat; fără sursă oficială verificată).
