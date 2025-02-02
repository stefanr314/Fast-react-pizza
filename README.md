# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Pizza Ordering App

Aplikacija za online naručivanje pica razvijena korišćenjem React, Redux, React Router i Vite.

## Tehnologije

- **React** – za izradu korisničkog interfejsa.
- **Redux** – za upravljanje stanjem aplikacije.
- **React Router** – za navigaciju unutar aplikacije.
- **Vite** – alat za brzo postavljanje i razvoj aplikacije.
  
## Postavka i Pokretanje Aplikacije

1. **Kloneuj repozitorijum:**

   Prvo, kloniraj repozitorijum na svoj lokalni računar.

   ```bash
   git clone https://github.com/tvoj-username/pizza-ordering-app.git
   cd pizza-ordering-app
``
2. **Instaliraj zavisnosti**:

Instaliraj sve zavisnosti korišćenjem npm:
```bash
npm install
```
3. **Pokreni razvojni server**:

Da bi pokrenuo aplikaciju u razvoju, koristi sledeću komandu:
```bash
npm run dev
```
Ovo će pokrenuti razvojni server na http://localhost:5173 (ili na portu koji je prikazan u terminalu).

## Razvojne Funkcionalnosti

- **Prikaz ponude pica**: Aplikacija prikazuje listu dostupnih pica sa mogućnostima za odabir veličine i vrste kore.
- **Dodavanje u korpu**: Korisnici mogu dodati pizze u svoju korpu i odmah videti ažurirani broj stavki i cenu.
- **Prikaz korpe**: Korisnici mogu pregledati sadržaj svoje korpe, ukloniti stavke ili promeniti količine.
- **Naručivanje**: Korisnici mogu završiti narudžbinu unosom svojih podataka i odabirom načina plaćanja.
- **Navigacija pomoću React Router-a**: Aplikacija omogućava jednostavnu navigaciju između stranica kao što su početna stranica, stranica sa ponudom pica, stranica korpe i stranica za završetak narudžbine.
- **Globalno stanje pomoću Redux-a**: Aplikacija koristi Redux za upravljanje stanjem aplikacije, kao što su stavke u korpi, broj narudžbina, i informacije o korisniku.
- **Responzivni dizajn**: Aplikacija je dizajnirana tako da dobro funkcioniše na različitim uređajima, uključujući mobilne telefone i desktop računare.
- **Asinhrono učitavanje podataka**: Podaci o picama se učitavaju asinhrono sa servera, što omogućava brže i efikasnije učitavanje aplikacije.

