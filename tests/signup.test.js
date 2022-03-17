const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/signuppage.js');

test('basic sign up test', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const accountPage = new AccountsPage(page);
  await signupPage.goto();
  await signupPage.fillEmailField('123@msdfsd.pl');
  await signupPage.fillPasswordField('123456aA!');
  await signupPage.iagreeCheck();
  await signupPage.signUp();
  await page.waitForTimeout(10000)
});