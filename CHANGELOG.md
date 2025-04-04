
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

## [1.3.0] - 2025-03-29

### Dodane
- Ukryta funkcja aktywowana sekwencją `666` + `C`
- Pojawiający się napis „Witaj” z animacją zoom-out jakby kamera się oddalała
- Terminalowy czat z efektem wyłaniania z mgły
- Styl messengerowy do wpisywania wiadomości
- Pełna responsywność na urządzeniach mobilnych (fonty, przyciski, layout)

### Poprawki
- Usunięcie kursora tekstowego z napisu „Witaj”
- Wygładzenie animacji powiększenia bez efektu przycięcia
- Skalowalny font „Witaj” przy użyciu `clamp()`

### Styl
- Motyw cyberpunkowy: Orbitron, neonowe cienie, ciemne tło

## [1.3.1] - 2025-03-31

### Dodane
Przycisk H do kalkulatora – wyświetla historię obliczeń z aktualnej sesji

Panel historii (#history-panel) dynamicznie pokazuje listę działań (a + b = wynik)

Styl historii spójny z kalkulatorem: neonowe obramowanie, czarne tło, monospaced font

Obsługa zdarzeń w czystym JavaScript – bez użycia zewnętrznych bibliotek

### Responsywność
Na desktopie: historia pojawia się z prawej strony kalkulatora

Na mobilu: historia automatycznie przesuwa się pod kalkulator

Media queries (@media) zapewniają układ kolumnowy na wąskich ekranach

### Poprawki
Panel historii domyślnie ukryty (.hidden)

Naprawiono błąd z curr is not defined w calculate()

Dodano meta viewport dla poprawnego działania mobilnego widoku

## [1.3.2] - 2025-04-02

### 🔄 Nowe funkcje
- Dodano możliwość eksportu historii obliczeń do pliku PDF
- Nowy przycisk **"Eksport do PDF"** w panelu historii
- Eksportowany dokument zawiera numerowaną listę wszystkich operacji z sesji
- Wykorzystanie biblioteki `jsPDF` do generowania PDF bez backendu

### 👩‍💻 UI i interakcje
- Zaktualizowany interfejs: nowy przycisk `#export-pdf` w stylu spójnym z kalkulatorem
- Obsługa kliknięcia przycisku dodana w `ui.js` (funkcja `exportToPDF()`)

### 🧪 Poprawki i detale
- Domyślny widok historii nadal ukryty, eksport działa tylko na aktualne działania
- Drobna poprawka przewijania wiadomości w czacie (auto-scroll do dołu)

### 📱 Responsywność
- Zachowany pełny wygląd PDF także na urządzeniach mobilnych (dzięki formatowi A4)

## [1.3.3] - 2025-04-03

### 🧠 Nowa funkcja: obsługa klawiatury

- Możliwość wpisywania cyfr i operatorów bez użycia myszki
- Obsługiwane klawisze:
  - **0–9** – wprowadzenie cyfr
  - **+ - * /** – wybór operatora
  - **Enter** lub **=** – wykonanie działania
  - **Backspace** – usuwa ostatni znak
  - **Escape** – czyści aktualne działanie (jak `C`)
  - **H** – pokazuje/ukrywa panel historii

### ⚙️ Zmiany w kodzie
- Dodano nasłuchiwacz `keydown` do `ui.js`
- Użyto istniejących funkcji (`appendNumber`, `setOperation`, `calculate`, `backspace`, `clear`, `toggleHistoryPanel`)
- Zachowano pełną kompatybilność z obsługą kliknięć

## [1.3.4] - 2025-04-04

### 🔧 Poprawki
- Jeśli panel historii był otwarty przed aktywacją ukrytej funkcji `666+C`, zostaje automatycznie ukryty
- Zaktualizowano `ui.js` → funkcja `showEasterEgg()` teraz wywołuje `elements.historyPanel.classList.add('hidden')`

### 💡 Uwaga
Dzięki tej zmianie interfejs zachowuje spójność — panel historii nie „wisi” w trybie ukrytym.
