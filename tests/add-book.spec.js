import { test, expect } from '@playwright/test';

test.describe('test för att lägga till bok', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Testa att lägga till en bok', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
        const catalogueButton = page.getByRole('button', {name: 'Katalog'})
        const titleInput = page.getByTestId('add-input-title')
        const authorInput = page.getByTestId('add-input-author')
        const addNewBookButton = page.getByRole('button', {name: 'Lägg till ny bok'})
        const visibleNewBook = page.getByText('Test Book')

        await expect(page).toHaveTitle(/Läslistan/);

        // Klicka på "Lägg till bok" först
        await addBookButton.click()

        // Fyll i formuläret
        await titleInput.fill('Test Book')
        await authorInput.fill('Test Author')

        // Klicka på "Lägg till bok" för att lägga till boken
        await addNewBookButton.click()

        // Klicka på Katalog-knappen
        await catalogueButton.click()

        // Kontrollera att boken är synlig i katalogen
        await expect(visibleNewBook).toBeVisible()
    })
}) 