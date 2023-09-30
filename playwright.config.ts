import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 1,
  reporter: 'html',
  use: {
    actionTimeout: 10000,
    navigationTimeout: 40000,
    ignoreHTTPSErrors: true,
    viewport: { width: 1366, height: 768 },
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
    baseURL: '/'
  },
  projects: [
    {
      name: 'setup',
      testDir: 'utils',
      testMatch: /auth.setup.ts$/
    },
    {
      name: 'Uni-web verifications',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './playwright/.auth/fixedUser.json'
      },
      dependencies: ['setup']
    }
  ]
});
