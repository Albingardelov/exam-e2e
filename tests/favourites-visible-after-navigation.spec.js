import { test, expect } from '@playwright/test';

test.describe('test för att favoriter förblir synliga efter navigering', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    });

    test('Favoriter förblir synliga efter navigering', async ({ page }) => {
        const addBookButton = page.getByRole('button', { name: 'Lägg till bok' });
        const catalogueButton = page.getByRole('button', { name: 'Katalog' });
        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' });
        const titleInput = page.getByTestId('add-input-title');
        const authorInput = page.getByTestId('add-input-author');
        const addNewBookBtn = page.getByRole('button', { name: 'Lägg till ny bok' });
        const bookTitle = 'Min unika bok';
        const heartButton = page.getByTestId(`star-${bookTitle}`);
        const visibleMyFavs = page.getByText(bookTitle);

        // Gå till "Lägg till bok"-vyn
        await addBookButton.click();

        // Lägg till en bok
        await titleInput.fill(bookTitle);
        await authorInput.fill('Bertil Flimmer');
        await addNewBookBtn.click();

        // Gå till "Katalog"-vyn
        await catalogueButton.click();

        // Klicka på hjärtat för att lägga till boken som favorit
        await heartButton.click();

        // Gå till "Mina böcker" och kontrollera att boken syns
        await myBooksButton.click();
        await expect(visibleMyFavs).toBeVisible();

        // Gå tillbaka till "Katalog"-vyn
        await catalogueButton.click();

        // Gå till "Mina böcker" igen och kontrollera att boken fortfarande syns
        await myBooksButton.click();
        await expect(visibleMyFavs).toBeVisible();
    });
}); 