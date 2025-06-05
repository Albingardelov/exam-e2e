import { test, expect } from '@playwright/test';

test.describe('test för att ta bort och åter lägga till favorit', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })

    test('Testa att ta bort och åter lägga till en bok som favorit', async ({ page }) => {
        const addBookButton = page.getByRole('button', {name: 'Lägg till bok'})
        const catalogueButton = page.getByRole('button', {name: 'Katalog'})
        const myBooksButton = page.getByRole('button', {name: 'Mina böcker'})
        const heartButton = page.getByTestId('star-Kaffekokaren som visste för mycket')
        const visibleBertil = page.getByText('Bertil Flimmer')
        const visibleMyBooksEmpty = page.getByText('När du valt')
        const visibleMyFavs = page.getByText('Kaffekokaren som visste för mycket')

        await expect(page).toHaveTitle(/Läslistan/);

        // Klicka på "Lägg till bok" först
        await addBookButton.click()

        // Klicka på Katalog-knappen
        await catalogueButton.click()
        await expect(visibleBertil).toBeVisible()

        // Klicka på hjärtat för att lägga till boken i favoriter
        await heartButton.click()

        // Klicka på Mina böcker och kontrollera att boken är synlig
        await myBooksButton.click()
        await expect(visibleMyFavs).toBeVisible()

        // Gå tillbaka till Katalog för att ta bort boken från favoriter
        await catalogueButton.click()
        await expect(visibleBertil).toBeVisible()

        // Klicka på hjärtat igen för att ta bort boken från favoriter
        await heartButton.click()

        // Gå till Mina böcker och kontrollera att listan är tom
        await myBooksButton.click()
        await expect(visibleMyBooksEmpty).toBeVisible()

        // Gå tillbaka till Katalog för att lägga till boken i favoriter igen
        await catalogueButton.click()
        await expect(visibleBertil).toBeVisible()

        // Klicka på hjärtat för att lägga till boken i favoriter igen
        await heartButton.click()

        // Gå till Mina böcker och kontrollera att boken är synlig igen
        await myBooksButton.click()
        await expect(visibleMyFavs).toBeVisible()
    })
}) 