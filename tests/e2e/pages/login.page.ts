import type {Page} from '@playwright/test';

export class LoginPage {
    constructor(private readonly page: Page) {
    }

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(_email: string, _password: string) {
        await this.page.getByRole('textbox', {name: 'Username'}).fill(username)
        await this.page.getByRole('textbox', {name: 'Password'}).fill(password)
        await this.page.getByRole('button', {name: 'Login'}).click()
    }

    getErrorMessage() {
        return this.page.getByText('Invalid Credentials')
    }
}
