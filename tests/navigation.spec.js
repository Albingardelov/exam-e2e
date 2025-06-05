import { test, expect } from '@playwright/test';

const TIMEOUT = 30000;

test.describe('Navigation test', () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/', { timeout: TIMEOUT })
	})

    test('navigera mellan olika vyer', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
		const catalogueButton = page.getByRole('button', {name: 'Katalog'})
		const myBookButton = page.getByRole('button', {name: 'Mina böcker'})
		const visibleBertil = page.getByText('Bertil Flimmer')
		const visibleMyBooksEmpty = page.getByText('När du valt')
		const visibleTitle = page.getByText('Titel')

        await expect(page).toHaveTitle(/Läslistan/); // Kontrollera att sidans titel är korrekt

        // 1. Klicka på "Lägg till bok" navigeringsknapp och kontrollera att etiketten "Titel" är synlig
        await addBookButton.click({ timeout: TIMEOUT })
		await expect(visibleTitle).toBeVisible({ timeout: TIMEOUT })

        // 2. Klicka på "Katalog" navigeringsknapp och kontrollera att texten "Bertil Flimmer" är synlig
        await catalogueButton.click({ timeout: TIMEOUT })
		await expect(visibleBertil).toBeVisible({ timeout: TIMEOUT })

        // 3. Klicka på "Mina böcker" navigeringsknapp och kontrollera att texten "När du valt" är synlig
        await myBookButton.click({ timeout: TIMEOUT })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: TIMEOUT })

        // 4. Klicka på "Katalog" navigeringsknapp och kontrollera att texten "Bertil Flimmer" är synlig
        await catalogueButton.click({ timeout: TIMEOUT })
		await expect(visibleBertil).toBeVisible({ timeout: TIMEOUT })

        // 5. Klicka på "Mina böcker" navigeringsknapp och kontrollera att texten "När du valt" är synlig
        await myBookButton.click({ timeout: TIMEOUT })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: TIMEOUT })

        // 6. Klicka på "Lägg till bok" navigeringsknapp och kontrollera att etiketten "Titel" är synlig
        await addBookButton.click({ timeout: TIMEOUT })
		await expect(visibleTitle).toBeVisible({ timeout: TIMEOUT })

        // 7. Klicka på "Mina böcker" navigeringsknapp och kontrollera att texten "När du valt" är synlig
        await myBookButton.click({ timeout: TIMEOUT })
		await expect(visibleMyBooksEmpty).toBeVisible({ timeout: TIMEOUT })
    })
}) 