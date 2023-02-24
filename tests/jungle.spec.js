// @ts-check
import { test, expect } from '@playwright/test'

test.beforeEach(async ({page}) =>{
    await page.goto("https://welcometothejungle.com/fr/me/settings/account");
}
)

test('jungle website acces', async ({page}) => {
await expect(page).toHaveTitle(/Welcome to the Jungle/)

})

test('fill login and password', async ({page}) => {
const id = page.getByTestId('login')
await id.click

const email = page.locator('text=email_login').first()
await email.click
await page.keyboard.type('inqom.qaautomationapplicant@gmail.com')

const password = page.locator('text=password').first()
await password.click
await page.keyboard.type('o5N,d5ZR@R7^')

})

test('connection', async ({page}) => {

const connection = page.getByTestId('login-button-submit')
await connection.click

await page.locator('text=Mes informations').isVisible()
  
})

test('uploading a photo', async ({page}) => {

const avatar = page.getByTestId('avatar')
await avatar.click
await page.setContent(`<input type="file">`)
    const input = await page.$('input')
    await input.setInputFiles('photo1.png')




})
 