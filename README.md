# End-to-End Testing för Läslista-applikation

## Projektbeskrivning
Detta projekt innehåller E2E-tester för "Läslistan", en app där användare kan favoritmarkera böcker. Testerna är skrivna med Playwright och täcker funktionalitet som navigering, lägga till böcker, och hantera favoriter.

## User Stories

1. **Navigera mellan olika vyer**
   - Som användare vill jag kunna navigera mellan olika vyer i applikationen
   - Som användare vill jag se rätt rubrik på varje sida jag besöker

2. **Lägga till böcker**
   - Som användare vill jag kunna lägga till nya böcker i katalogen
   - Som användare vill jag kunna ange titel, författare och antal sidor
   - Som användare vill jag se min bok i katalogen efter att jag lagt till den

3. **Markera favoritböcker**
   - Som användare vill jag kunna markera böcker som favoriter genom att klicka på ett hjärta
   - Som användare vill jag se mina favoritböcker under "Mina böcker"
   - Som användare vill jag kunna ta bort böcker från mina favoriter genom att klicka på hjärtat igen

## Implementerade tester
- **Navigeringstester:** Verifierar att användaren kan navigera mellan olika vyer (Katalog, Lägga till bok, Mina böcker).
- **Lägga till bok-tester:** Verifierar att användaren kan lägga till nya böcker i katalogen.
- **Favorit-tester:** Verifierar att användaren kan markera böcker som favoriter, ta bort favoriter, och att favoriter förblir synliga efter navigering.

## Senaste uppdateringar
- Ökade timeout-värden för att hantera långsamma internetanslutningar.
- Implementerade tester för att ta bort och åter lägga till böcker som favoriter.
- Implementerade tester för att kontrollera att favoriter förblir synliga efter navigering.

## Kommandon
- Kör alla tester: `npm test`

## Teknisk information

- Använder Playwright för end-to-end testing
- Tester körs i Chromium, Firefox och WebKit
- Timeout inställd till 2000ms på grund av långsam internetanslutning
- Tester körs parallellt för effektivitet

## Kommande tester
- Tester för att markera böcker som favoriter
- Tester för att ta bort böcker från favoriter
