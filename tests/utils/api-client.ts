import type { APIRequestContext } from '@playwright/test';

// TODO: implement login helper that returns JWT token for student/admin
export async function loginAndGetToken(_request: APIRequestContext, _role: 'student' | 'admin'): Promise<string> {
  throw new Error('TODO: implement loginAndGetToken in tests/utils/api-client.ts');
}

// TODO: add helpers for authenticated GET/POST/PUT/DELETE requests
