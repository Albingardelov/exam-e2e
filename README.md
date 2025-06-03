# End-to-End Testing för Läslista-applikation

Detta projekt innehåller end-to-end tester för en läslista-applikation, skrivna med Playwright.

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

### Navigeringstester
- Verifierar att användaren kan navigera till alla vyer
- Kontrollerar att rätt rubrik visas på varje sida

### Lägga till bok-tester
- Verifierar att användaren kan lägga till en ny bok
- Kontrollerar att boken visas i katalogen efter tillägg

### Favoritbok-tester (kommande)
- Verifierar att användaren kan markera en bok som favorit
- Kontrollerar att favoritboken visas under "Mina böcker"
- Verifierar att användaren kan ta bort en bok från favoriter

## Teknisk information

- Använder Playwright för end-to-end testing
- Tester körs i Chromium, Firefox och WebKit
- Timeout inställd till 2000ms på grund av långsam internetanslutning
- Tester körs parallellt för effektivitet

## Kommande tester
- Tester för att markera böcker som favoriter
- Tester för att ta bort böcker från favoriter
