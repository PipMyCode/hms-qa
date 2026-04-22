import { test, expect } from '@playwright/test';

test.describe('Smoke suite @smoke @critical', () => {
  test('landing page loads @smoke', async () => {
    // TODO
  });

  test('student login success @smoke @auth', async () => {
    // TODO
  });

  test('invalid login fails @smoke @auth', async () => {
    // TODO
  });

  test('halls redirect behavior @smoke @hostels', async () => {
    // TODO: assert /halls => 307 and /halls/ => 200
  });

  test('calendar unauthorized without token @smoke @calendar', async () => {
    // TODO: assert /calendar/ returns 401 without auth
  });
});
