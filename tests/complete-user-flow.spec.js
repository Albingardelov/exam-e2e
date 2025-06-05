import { test, expect } from '@playwright/test';

test.describe('test för komplett användarflöde', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    });

    test('Testa komplett flöde: lägg till bok -> markera favorit -> navigera -> verifiera', async ({ page }) => {
        const addBookButton = page.getByRole('button', { name: 'Lägg till bok' });
        const catalogueButton = page.getByRole('button', { name: 'Katalog' });
        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' });
        const titleInput = page.getByTestId('add-input-title');
        const authorInput = page.getByTestId('add-input-author');
        const addNewBookBtn = page.getByRole('button', { name: 'Lägg till ny bok' });

        // Steg 1: Lägg till en ny bok
        await addBookButton.click();
        await titleInput.fill('Min favoritbok');
        await authorInput.fill('Min favoritförfattare');
        await addNewBookBtn.click();

        // Steg 2: Gå till katalog och markera som favorit
        await catalogueButton.click();
        const heartButton = page.getByTestId('star-Min favoritbok');
        await heartButton.click();

        // Steg 3: Gå till Mina böcker och verifiera att boken syns
        await myBooksButton.click();
        const bookInFavorites = page.getByText('Min favoritbok');
        await expect(bookInFavorites).toBeVisible();

        // Steg 4: Gå tillbaka till katalog
        await catalogueButton.click();

        // Steg 5: Gå tillbaka till Mina böcker och verifiera att boken fortfarande syns
        await myBooksButton.click();
        await expect(bookInFavorites).toBeVisible();

        // Steg 6: Gå till katalog och ta bort från favoriter
        await catalogueButton.click();
        await heartButton.click();

        // Steg 7: Gå till Mina böcker och verifiera att boken inte längre syns
        await myBooksButton.click();
        await expect(bookInFavorites).not.toBeVisible();
    });
}); 