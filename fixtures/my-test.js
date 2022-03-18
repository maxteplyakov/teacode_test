const base = require('@playwright/test');
const { SignupPage } = require('../pages/signuppage.js');
const { AccountsPage } = require('../pages/accountpage.js');
const { UserModel } = require('../models/usermodel.js'); 

exports.test = base.test.extend({
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
    //await signupPage.removeAll();
  },

  accountPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
    //await accountsPage.removeAll();
  },

  user: async ({ page }, use) => {
    await use(new UserModel());
    //await user.removeAll();
  },
});
exports.expect = base.expect;