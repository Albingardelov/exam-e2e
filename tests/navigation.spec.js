import { test, expect } from '@playwright/test';

test.describe('test för navigering', () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
	})

	test('Testa navigering mellan olika vyer', async ({ page }) => {
		const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
		const catalogueButton = page.getByRole('button', {name: 'Katalog'})
		const myBooksButton = page.getByRole('button', {name: 'Mina böcker'})
		const visibleTitle = page.getByText('Titel')
		const visibleBertil = page.getByText('Bertil Flimmer')
		const visibleMyBooksEmpty = page.getByText('När du valt')

		await expect(page).toHaveTitle(/Läslistan/);

		// Klicka på "Lägg till bok" och kontrollera att vi är på rätt sida
		await addBookButton.click()
		await expect(visibleTitle).toBeVisible()

		// Klicka på "Katalog" och kontrollera att vi är på rätt sida
		await catalogueButton.click()
		await expect(visibleBertil).toBeVisible()

		// Klicka på "Mina böcker" och kontrollera att vi är på rätt sida
		await myBooksButton.click()
		await expect(visibleMyBooksEmpty).toBeVisible()
	})
}) 