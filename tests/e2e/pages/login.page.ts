import { type Page } from '@playwright/test';

export class LoginPage {
    constructor(private readonly page: Page) {
    }

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(email: string, password: string) {
        await this.page.getByRole('textbox', {name: 'Email'}).fill(email)
        await this.page.getByRole('textbox', {name: 'Password'}).fill(password)
        await this.page.getByRole('button', {name: 'Sign in'}).click()
    }

    getErrorMessage() {
        return this.page.getByText('Invalid Credentials')
    }
}
