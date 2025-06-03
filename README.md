# Exam E2E Testing

## Projektbeskrivning
Detta projekt innehåller end-to-end tester för en läslistapplikation. Testerna är skrivna med Playwright och testar olika funktionaliteter i applikationen.

## Tester
### Navigeringstester
- Implementerade tester för att verifiera navigering mellan olika vyer i applikationen
- Testerna kontrollerar att användaren kan navigera mellan:
  - Katalog
  - Lägga till bok
  - Mina böcker
  - fick ett timeout-fel i WebKit-webbläsaren på grund av för kort timeout-tid (500ms)
- Lösning: Ökade timeout-tiden till 2000ms för att ge testerna mer tid att köra
- Efter justeringen passerar alla tester i alla webbläsare (Chromium, Firefox, WebKit)

### Kommande tester
- Tester för att lägga till böcker
- Tester för att ta bort böcker
- Tester för att markera böcker som lästa/olästa
