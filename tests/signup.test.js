const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/signuppage.js');

test('basic sign up test', async ({ page }) => {
  const signupPage = new SignupPage(page);
  await signupPage.goto();
  await signupPage.fillEmailField('123@utyu.pl');
  await signupPage.fillPasswordField('123456aA!');
  await signupPage.iagreeCheck();
  await signupPage.signUp();
  await expect(page).toHaveURL('https://staging.paymi.com/dashboard/how-to', {timeout: 10000}) 
}); 