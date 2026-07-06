const { defineConfig } = require('@playwright/test');
const os = require('os');

const homeDir = os.homedir();
const chromePath = `${homeDir}/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome`;

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: false,
  workers: 3,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:8000',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      executablePath: chromePath,
      args: [
        '--use-gl=swiftshader',
        '--disable-dev-shm-usage',
        '--no-sandbox',
      ]
    }
  },
  webServer: {
    command: 'python3 serve.py',
    port: 8000,
    reuseExistingServer: true,
  },
});
