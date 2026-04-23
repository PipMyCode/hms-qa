import type {Page} from '@playwright/test';

export class LoginPage {
    constructor(private readonly page: Page) {
    }

    async goto() {
        // TODO: navigate to /auth/login
        await this.page.goto('/auth/login');
    }

    async login(_email: string, _password: string) {
        // TODO: fill email/password and click login
        await this.page.getByRole('textbox', {name: 'Username'}).fill(username)
        await this.page.getByRole('textbox', {name: 'Password'}).fill(password)
        await this.page.getByRole('button', {name: 'Login'}).click()
    }

    async expectError() {
        await
    }
}
