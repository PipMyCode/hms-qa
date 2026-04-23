import {test, expect, page} from '@playwright/test';
import {LandingPage} from "./pages/landing.page";
import {LoginPage} from "./pages/login.page";


const USERS = {
    standard: {
        email: 'yindamoladigun@gmail.com',
        password: '********'
    },

    wrongPassword: {
        email: 'yindamoladigun@gmail.com',
        password: 'wrongpassword'
    }



}
test.describe('Smoke suite @smoke @critical', () => {
    test('landing page loads @smoke', async ({page}) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await expect(page).toHaveURL(:8000)
        //await expect(page.getByRole('heading', {name: 'HostelHub'})).toBeVisible();

    });

    test('student login page @smoke @auth', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(page).toHaveURL(/auth\/login/);
        await expect(page.getByRole('heading', {name: 'HostelHub'})).toBeVisible();
        await

    });

    test('student login success @smoke @auth', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(page).toHaveURL(/auth\/login/);
        await page.getByRole('textbox', { name: 'Email' }).fill();
        await page.getByRole('textbox', { name: 'Password' }).fill();
        await page.getByRole('button', { name: 'Sign in' }).click();

    })

    test('invalid login fails @smoke @auth', async () => {
        // TODO
    });

    test('halls redirect behavior @smoke @hostels', async () => {
        // TODO: assert /halls => 307 and /halls/ => 200
    });

    test('calendar unauthorized without token @smoke @calendar', async () => {
        // TODO: assert /calendar/ returns 401 without auth
    });
});
