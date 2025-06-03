import { test, expect } from '@playwright/test';

test.describe('Navigation test', () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
	})

    test('We test navigation between three tabs', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
		const catalogueButton = page.getByRole('button', {name: 'Katalog'})
		const myBookButton = page.getByRole('button', {name: 'Mina böcker'})
		const visibleBertil = page.getByText('Bertil Flimmer')
		const visibleMyBooksEmpty = page.getByText('När du valt')
		const visibleTitle = page.getByText('Titel')

        await expect(page).toHaveTitle(/Läslistan/); //make sure that the page title is correct

        // 1. Click on "Lägg till bok" navigation button and label "Titel" must be visible
        await addBookButton.click({ timeout: 2000 })
		await expect(visibleTitle).toBeVisible({ timeout: 2000 })

        // 2. Click on "Katalog" navigation button so text "Bertil Flimmer" will be visible.
        await catalogueButton.click({ timeout: 2000 })
		await expect(visibleBertil).toBeVisible({ timeout: 2000 })

        // 3. Click on "Mina böcker" navigation button so text "När du valt" will be visible.
        await myBookButton.click({ timeout: 2000 })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 2000 })

        // 4. Click on "Katalog" navigation button so text "Bertil Flimmer" will be visible.
        await catalogueButton.click({ timeout: 2000 })
		await expect(visibleBertil).toBeVisible({ timeout: 2000 })

        // 5. Click on "Mina böcker" navigation button so text "När du valt" will be visible.
        await myBookButton.click({ timeout: 2000 })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 2000 })

        // 6. Click on "Lägg till bok" navigation button and label "Titel" must be visible
        await addBookButton.click({ timeout: 2000 })
		await expect(visibleTitle).toBeVisible({ timeout: 2000 })

        // 7. Click on "Mina böcker" navigation button so text "När du valt" will be visible.
        await myBookButton.click({ timeout: 2000 })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: 2000 })
    })
}) 