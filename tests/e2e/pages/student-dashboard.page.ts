import type { Page } from '@playwright/test';

export class StudentDashboardPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    // TODO: assert URL is /dashboard/student-dashboard and user section is visible
  }

  async openRoomSection() {
    // TODO: click Room Allocation tab and assert section visible
  }

  async openEventsSection() {
    // TODO: click Events tab and assert section visible
  }
}
