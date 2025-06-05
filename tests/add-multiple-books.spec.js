import { test, expect } from '@playwright/test';

test.describe('test för att lägga till flera böcker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
    });

    test('Testa att lägga till flera böcker i sekvens', async ({ page }) => {
        const addBookButton = page.getByRole('button', { name: 'Lägg till bok' });
        const catalogueButton = page.getByRole('button', { name: 'Katalog' });
        const titleInput = page.getByTestId('add-input-title');
        const authorInput = page.getByTestId('add-input-author');
        const addNewBookBtn = page.getByRole('button', { name: 'Lägg till ny bok' });

        // Lista med böcker att lägga till
        const books = [
            { title: 'Bok 1', author: 'Författare 1' },
            { title: 'Bok 2', author: 'Författare 2' },
            { title: 'Bok 3', author: 'Författare 3' }
        ];

        // Gå till "Lägg till bok"-vyn
        await addBookButton.click();

        // Lägg till varje bok i sekvens
        for (const book of books) {
            await titleInput.fill(book.title);
            await authorInput.fill(book.author);
            await addNewBookBtn.click();
        }

        // Gå till "Katalog"-vyn
        await catalogueButton.click();

        // Verifiera att alla böcker visas i katalogen
        for (const book of books) {
            const bookElement = page.getByText(book.title);
            const authorElement = page.getByText(book.author);
            await expect(bookElement).toBeVisible();
            await expect(authorElement).toBeVisible();
        }
    });
}); 