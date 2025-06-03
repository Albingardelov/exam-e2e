import { test, expect } from '@playwright/test';

test.describe('add new book feature test', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Testing adding of a new book to catalogue', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
        const catalogueButton = page.getByRole('button', {name: 'Katalog'})
        const visibleTestAuthor = page.getByText('testAuthor')
        const visibleTitle = page.getByText('Titel')
        const titleInput = page.getByTestId('add-input-title')
        const authorInput = page.getByTestId('add-input-author')
        const addNewBookBtn = page.getByRole('button', {name: 'Lägg till ny bok'})

        // Kontrollera att sidans titel är korrekt
        await expect(page).toHaveTitle(/Läslistan/);

        // 1. Klicka på "Lägg till bok" navigeringsknapp och kontrollera att etiketten "Titel" är synlig
        await addBookButton.click({ timeout: 2000 })
        await expect(visibleTitle).toBeVisible({ timeout: 2000 })

        // 2. Fyll i formuläret: "testTitle" i Titelfältet och "testAuthor" i författarfältet
        await titleInput.fill('testTitle', { timeout: 2000 });
        await authorInput.fill('testAuthor', { timeout: 2000 });

        // 3. Klicka på "Lägg till ny bok" knappen under Författare-fältet
        await addNewBookBtn.click({ timeout: 2000 })

        // 4. Klicka på "Katalog" navigeringsknapp och kontrollera att texten "testAuthor" är synlig
        await catalogueButton.click({ timeout: 2000 })
        await expect(visibleTestAuthor).toBeVisible({ timeout: 2000 })
    })
}) 