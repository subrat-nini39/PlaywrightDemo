import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    headless: true,
    baseURL: 'https://www.demoblaze.com/index.html'
  },
  reporter: [['html', { open: 'never' }]],
});
