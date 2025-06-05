import { test, expect } from '@playwright/test';

test.describe('test för att lägga till bok med specialtecken', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Testa att lägga till en bok med specialtecken', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
        const catalogueButton = page.getByRole('button', {name: 'Katalog'})
        const titleInput = page.getByTestId('add-input-title')
        const authorInput = page.getByTestId('add-input-author')
        const addNewBookButton = page.getByRole('button', {name: 'Lägg till ny bok'})
        const visibleNewBook = page.getByText('Test@Book123')

        await expect(page).toHaveTitle(/Läslistan/);

        // Klicka på "Lägg till bok" först
        await addBookButton.click()

        // Fyll i formuläret med specialtecken
        await titleInput.fill('Test@Book123')
        await authorInput.fill('Author#456')

        // Klicka på "Lägg till bok" för att lägga till boken
        await addNewBookButton.click()

        // Klicka på Katalog-knappen
        await catalogueButton.click()

        // Kontrollera att boken är synlig i katalogen
        await expect(visibleNewBook).toBeVisible()
    })
}) 