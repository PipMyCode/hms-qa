import type { page } from '@playwright/test';
export class LandingPage {
    constructor(private readonly page: page) {
    }

    async goto {
        await this.page.goto('/')
    }
}