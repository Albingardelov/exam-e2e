import { test, expect } from '@playwright/test';

const TIMEOUT = 30000;

test.describe('favourite feature test', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/', { timeout: TIMEOUT })
    })

    test('Testing adding and removing books from favourites', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
        const catalogueButton = page.getByRole('button', {name: 'Katalog'})
        const myBooksButton = page.getByRole('button', {name: 'Mina böcker'})
        const heartButton = page.getByTestId('star-Kaffekokaren som visste för mycket')
        const visibleBertil = page.getByText('Bertil Flimmer')
        const visibleMyBooksEmpty = page.getByText('När du valt')
        const visibleMyFavs = page.getByText('Kaffekokaren som visste för mycket')

        // Kontrollera att sidans titel är korrekt
        await expect(page).toHaveTitle(/Läslistan/);

        // Klicka på "Lägg till bok" först
        await addBookButton.click({ timeout: TIMEOUT })

        // Klicka på Katalog-knappen
        await catalogueButton.click({ timeout: TIMEOUT })
        await expect(visibleBertil).toBeVisible({ timeout: TIMEOUT })

        // Klicka på hjärtat för att lägga till boken i favoriter
        await heartButton.click({ timeout: TIMEOUT })

        // Klicka på Mina böcker och kontrollera att boken är synlig
        await myBooksButton.click({ timeout: TIMEOUT })
        await expect(visibleMyFavs).toBeVisible({ timeout: TIMEOUT })

        // Gå tillbaka till Katalog för att ta bort boken från favoriter
        await catalogueButton.click({ timeout: TIMEOUT })
        await expect(visibleBertil).toBeVisible({ timeout: TIMEOUT })

        // Klicka på hjärtat igen för att ta bort boken från favoriter
        await heartButton.click({ timeout: TIMEOUT })

        // Gå till Mina böcker och kontrollera att listan är tom
        await myBooksButton.click({ timeout: TIMEOUT })
        await expect(visibleMyBooksEmpty).toBeVisible({ timeout: TIMEOUT })
    })
}) 