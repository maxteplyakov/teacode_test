const { test, expect } = require('../fixtures/my-test.js');

test('sign up smoke test', async ({ page, signupPage, accountPage, user }) => {

  await signupPage.goto();
  await signupPage.fillEmailField(user.email);
  await signupPage.fillPasswordField(user.password);
  await signupPage.iagreeCheck();
  await signupPage.signUp();
  await expect(page).toHaveURL('https://staging.paymi.com/dashboard/how-to', {timeout: 10000});
  await page.waitForLoadState('domcontentloaded')
  await accountPage.logOut();
}); 