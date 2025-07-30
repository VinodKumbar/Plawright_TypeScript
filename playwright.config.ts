import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

const baseURL = process.env.ENV === 'QA' ? process.env.QA_URL : process.env.PROD_URL;

console.log('Running tests on:', baseURL);




export default defineConfig({
  testDir: './tests',

  // To change the timeout global timeout for all tests
  timeout: 60000, // 60 seconds

  expect: {
    /** Maximum time expect() should wait for the condition to be met. */
    timeout: 5000, // 5 seconds
  },

  

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: baseURL,

     screenshot: 'only-on-failure', // Take screenshot only on test failure
      trace: 'retain-on-failure', // Retain trace files only on test failure
      video: 'retain-on-failure', // Retain video files only on test failure

  },

  reporter: [['allure-playwright']],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   /*  {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
