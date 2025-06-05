import { test, expect } from '@playwright/test';

const TIMEOUT = 30000;

test.describe('Testing remove and add favourite book', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/', { timeout: TIMEOUT });
    });

    test('Remove and add a book as favourite', async ({ page }) => {
        const addBookButton = page.getByRole('button', { name: 'Lägg till bok' });
        const catalogueButton = page.getByRole('button', { name: 'Katalog' });
        const myBooksButton = page.getByRole('button', { name: 'Mina böcker' });
        const titleInput = page.getByTestId('add-input-title');
        const authorInput = page.getByTestId('add-input-author');
        const addNewBookBtn = page.getByRole('button', { name: 'Lägg till ny bok' });
        const heartButton = page.getByTestId('star-testTitle');
        const visibleMyFavs = page.getByText('testTitle');
        const visibleMyBooksEmpty = page.getByText('När du valt');

        // Gå till "Lägg till bok"-vyn
        await addBookButton.click();

        // Lägg till en bok
        await titleInput.fill('testTitle');
        await authorInput.fill('testAuthor');
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

        // Klicka på hjärtat igen för att ta bort boken från favoriter
        await heartButton.click();

        // Gå till "Mina böcker" och kontrollera att boken inte längre syns
        await myBooksButton.click();
        await expect(visibleMyBooksEmpty).toBeVisible();

        // Gå tillbaka till "Katalog"-vyn
        await catalogueButton.click();

        // Klicka på hjärtat igen för att lägga till boken som favorit
        await heartButton.click();

        // Gå till "Mina böcker" och kontrollera att boken syns igen
        await myBooksButton.click();
        await expect(visibleMyFavs).toBeVisible();
    });
}); 