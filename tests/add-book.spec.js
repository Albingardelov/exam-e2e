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

        // 1. Click on "Lägg till bok" navigation button and label "Titel" must be visible
        await addBookButton.click({ timeout: 2000 })
        await expect(visibleTitle).toBeVisible({ timeout: 2000 })

        // 2. Fill form: "testTitle" in Titel field and "testAuthor" in författare field
        await titleInput.fill('testTitle', { timeout: 2000 });
        await authorInput.fill('testAuthor', { timeout: 2000 });

        // 3. Click on "Lägg till ny bok" knappen under Författare field. 
        await addNewBookBtn.click({ timeout: 2000 })

        // 4. Click on "Katalog" navigation button so text "testAuthor" will be visible.
        await catalogueButton.click({ timeout: 2000 })
        await expect(visibleTestAuthor).toBeVisible({ timeout: 2000 })
    })
}) 