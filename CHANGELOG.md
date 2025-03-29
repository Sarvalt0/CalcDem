
---

## 📄 `CHANGELOG.md`

```markdown
# Changelog

Wszystkie istotne zmiany w tym projekcie będą dokumentowane w tym pliku.

## [1.0.0] - 2025-03-29

### Dodane
- Funkcje: dodawanie, odejmowanie, mnożenie, dzielenie
- Obsługa błędu dzielenia przez zero
- Separacja logiki (`calculator.js`) i UI (`ui.js`)
- Pierwsza wersja projektu w HTML, CSS, JS

## [1.1.0] - 2025-03-29

### Dodane
- Funkcja `backspace()` usuwająca ostatnią cyfrę z `currentInput`
- Przycisk ⌫ w UI i obsługa w `ui.js`
- Testy jednostkowe dla wszystkich funkcji logiki (`appendNumber`, `setOperation`, `calculate`, `clear`, `backspace`)
- Konfiguracja `Jest` pod ECMAScript Modules (ESM):
  - `package.json` z `"type": "module"`
  - `babel.config.cjs` jako CommonJS
  - `jest.config.js` z transformacją `babel-jest`

### Poprawki
- Refaktoryzacja `calculator.js` do ESM (`export` zamiast `module.exports`)
- Usunięcie atrybutów `onclick` z HTML – zastąpienie ich `data-*` i zdarzeniami JS

### Usunięte
- Sekcja `"jest"` z `package.json` (na rzecz `jest.config.js`)

## [1.2.0] - 2025-03-29

### Dodane
- Nowy futurystyczno-cyberpunkowy motyw graficzny
- Stylizacja ekranu `#display` na wzór terminala z neonowym podświetleniem
- Neonowe przyciski z efektami `hover` i `active`
- Tło gradientowe z mrocznym, eleganckim przejściem
- Czcionka `Orbitron` z Google Fonts dodana do projektu
- Obsługa `font-display: swap` dla lepszej wydajności i UX

### Zmiany
- Przeniesiono link do czcionki nad lokalny `style.css` dla lepszej kolejności ładowania

### Uwaga
- Stylizacja inspirowana estetyką retro-futurystyczną i interfejsem typu HUD/terminal