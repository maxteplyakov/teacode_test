const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/signuppage.js');
const { AccountsPage } = require('../pages/accountpage.js');
const { UserModel } = require('../models/usermodel.js'); 

test('basic sign up test', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const accountPage = new AccountsPage(page);
  const user = new UserModel();
  
  await signupPage.goto();
  await signupPage.fillEmailField(user.email);
  await signupPage.fillPasswordField(user.password);
  await signupPage.iagreeCheck();
  await signupPage.signUp();
  await expect(page).toHaveURL('https://staging.paymi.com/dashboard/how-to', {timeout: 10000});
  await page.waitForLoadState('domcontentloaded')
  await accountPage.logOut();
}); 