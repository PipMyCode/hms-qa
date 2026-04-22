import { test } from '@playwright/test';

test.describe('API smoke @smoke @api', () => {
  test('GET /health returns pong @smoke', async () => {
    // TODO
  });

  test('GET /profile/me with auth token @smoke', async () => {
    // TODO
  });

  test('GET /calendar/ requires auth @smoke', async () => {
    // TODO
  });
});
