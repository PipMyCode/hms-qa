import type { Page } from '@playwright/test';
export class LandingPage {
    constructor(private readonly page: Page) {
    }

    async goto () {
        await this.page.goto('/')
    }
    async clickGetStarted() {
        await this.page.getByRole('link', {name: 'Get Started'}).click()
    }
}