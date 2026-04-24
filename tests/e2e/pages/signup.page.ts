import {type Page} from '@playwright/test';

type SignupData = {
    firstName: string;
    surname: string;
    level: string;
    department: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export class SignupPage {
    constructor(private readonly page: Page) {
    }

    async goto() {
        await this.page.goto('/auth/get-started')
    }

    async signup(data: SignupData) {
        await this.page.getByRole('textbox', {name: 'First Name'}).fill(data.firstName);
        await this.page.getByRole('textbox', {name: 'Surname'}).fill(data.surname);
        await this.page.getByLabel('Level').selectOption(data.level);
        await this.page.getByRole('textbox', {name: 'Enter your department'}).fill(data.department);
        await this.page.getByPlaceholder('Enter your phone number').fill(data.phoneNumber);
        await this.page.getByRole('textbox', {name: 'Email'}).fill(data.email);
        await this.page.getByRole('textbox', {name: 'Password'}).fill(data.password);
        await this.page.getByRole('button', {name: 'Sign Up'}).click();
    }

    getSuccessMessage() {
        return this.page.getByText(/account created successfully/i)
    }
}