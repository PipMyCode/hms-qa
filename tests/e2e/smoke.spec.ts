import {test, expect} from '@playwright/test';
import {LandingPage} from "./pages/landing.page";
import {LoginPage} from "./pages/login.page";
import {SignupPage} from "./pages/signup.page";
import {getEnv} from '../utils/env';

const env = getEnv();

const USERS = {
    standard: {
        email: env.studentEmail,
        password: env.studentPassword
    },

    wrongPassword: {
        email: env.studentEmail,
        password: 'wrongpassword'
    }
}

test.describe('Smoke suite @smoke @critical', () => {
    test('landing page loads @smoke', async ({page}) => {
        const landingPage = new LandingPage(page);
        await landingPage.goto();
        await expect(page).toHaveURL('/')

        await expect(page.getByRole('link', {name: 'HOSTELHUB'})).toBeVisible();
        const getStartedLink = page.getByRole('link', {name: 'Get Started'});

        await expect(getStartedLink).toBeVisible()
        await expect(getStartedLink).toHaveAttribute('href', '/auth/get-started')

    });
    test('new student can sign up @auth', async ({page}) => {
        const landingPage = new LandingPage(page);
        const signupPage = new SignupPage(page);
        const uniqueEmail = `student-${Date.now()}@example.com`;

        await landingPage.goto();
        await landingPage.clickGetStarted();

        await expect(page).toHaveURL(/auth\/get-started/);

        await signupPage.signup({
            firstName: 'Test',
            surname: 'User',
            level: '100',
            department: 'Computer Science',
            phoneNumber: '08064679313',
            email: uniqueEmail,
            password: 'mypassword123'
        })

        await expect(signupPage.getSuccessMessage()).toBeVisible();
        await expect(page).toHaveURL(/auth\/login/);

    })

    test('student login page @smoke @auth', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(page).toHaveURL(/auth\/login/);
        await expect(page.getByRole('heading', {name: 'HostelHub'})).toBeVisible();

    });

    test('student login success @smoke @auth', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await expect(page).toHaveURL(/auth\/login/);

        await loginPage.login(USERS.standard.email, USERS.standard.password);

        await expect(page).toHaveURL(/dashboard\/student-dashboard/);
        await expect(page.getByRole('heading', {name: 'Student Dashboard'})).toBeVisible();

    })

    test('invalid login fails @smoke @auth', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await expect(page).toHaveURL(/auth\/login/);
        await loginPage.login(USERS.wrongPassword.email, USERS.wrongPassword.password);
        await expect(loginPage.getErrorMessage()).toBeVisible();
    });

    test.skip('halls redirect behavior @smoke @hostels', async () => {
        // TODO: assert /halls => 307 and /halls/ => 200
    });

    test.skip('calendar unauthorized without token @smoke @calendar', async () => {
        // TODO: assert /calendar/ returns 401 without auth
    });
});
