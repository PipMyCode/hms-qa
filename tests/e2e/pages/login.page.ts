import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    // TODO: navigate to /auth/login
  }

  async login(_email: string, _password: string) {
    // TODO: fill email/password and click login
  }

  async expectError() {
    // TODO: assert visible error message
  }
}
