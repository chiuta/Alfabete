# Jurnal de modificări — Alfabete

## 2.4.2 — 2026-11-17

- Compatibilitate cu browsere mai vechi (Chrome/Edge 55+, Firefox 52+, Safari 10.1+/iOS 10.3+): kitul 1.8.0 aduce stratul de compatibilitate (rezerve pentru API-urile care lipsesc în motoarele vechi), iar sintaxa JavaScript mai nouă decât ES2017 a fost înlocuită cu forme echivalente acolo unde exista; expresiile regulate noi și `import()` trec prin rezerve. Fără modificări de funcționalitate intenționate. Verificat cu parser ES2017 și într-un motor vechi simulat, nu pe dispozitive reale.

## 2.4.1 — 2026-11-15

- Nou: butoane de distribuire pe rețele sociale (vertical, pe marginea din stânga; fără scripturi externe, doar linkuri deschise la clic); bara de zoom cu lupă și „potrivire ecran” revine pe marginea din dreapta, centrată pe verticală; corectat afișarea suprapusă la zoom mare (panourile cu înălțimi în vh/vw nu mai ies din ecran).

## 2.4.0 — 2026-11-15

- Nou: accesibilitate pe toate ecranele — butonul „Aa” (mărimea textului, contrast ridicat, fără animații, text lizibil, linkuri subliniate, citire cu voce), săgeata „Înapoi sus” și „Sari la conținut”; fereastra se potrivește mereu ecranului; zoom-ul cu lupă și „potrivire ecran” stau acum pe marginea din stânga (fff-kit 1.6.0).

## 2.3.8 — 2026-11-15

- Nou: texturi fractale hiper-detaliate (fff-texturi 1.1.2) — fundalul și suprafețele mari (carduri, panouri, antete, butoane; filele și dialogurile ascunse la încărcare, când se deschid) primesc un material generat local (WebGL2, fără rețea și fără imagini), care se repetă fără cusătură; culorile aplicației rămân ale ei. Se oprește din dialogul „Transparență” sau cu `?notex=1`.

## 2.3.3 — 2026-11-08
Doar documentare: README-urile (8 limbi) spun acum că gradul 2 e parțial implementat (doar engleză, semne-cuvânt, din 2.2.0), nu «neimplementat».

## 2.3.0 — 2026-11-02 (reîmprospătare kit)

- Nou (kit): **Sincronizare între dispozitive** (`FFF.sync`) — în dialogul «Transparență» (clic pe versiune → Copie de siguranță): conectezi două dispozitive direct (WebRTC, cod/QR, fără server și fără cont) și își schimbă datele aplicației; cea mai recentă valoare câștigă, secretele (chei API, parole) nu se trimit, ștergerile nu se propagă. Aplicarea trece prin importul kitului (confirmare, chei permise, rollback).
- Nou (kit): **Istoric local — «mașina timpului»** (`FFF.history`) — instantanee automate ale datelor (IndexedDB, fără secrete), diferență față de starea curentă și restaurare reversibilă; «Șterge datele aplicației» șterge și istoricul.
- Module adăugate: `qr`, `p2p`, `sync`, `history` (+~140 KB). Versiunea aplicației nu se schimbă.

## 2.3.0 — 2026-10-31

Anterior: 2.2.0. Îmbină linia din hub (2.0.0, 2026-10-26) cu linia acestui depozit, ca aplicația să poată trece pe origine proprie fără pierderi.

- Din hub: modulele kit `store` și `dialog` (stocare cu prefix de slug) și panoul nou „Traducător” (13 panouri în navigare).
- Păstrat din depozit: toate funcțiile 2.1–2.2.
- Teste actualizate pentru versiune/număr de panouri; testele axe au rulat cu axe-core 4.10.2, iar verificările care cer `/home/fff-kit` nu au rulat aici.

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
