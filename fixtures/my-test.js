const base = require('@playwright/test');
const { SignupPage } = require('../pages/signuppage.js');
const { AccountsPage } = require('../pages/accountpage.js');
const { UserModel } = require('../models/usermodel.js'); 

exports.test = base.test.extend({
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  accountPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },

  user: async ({ page }, use) => {
    await use(new UserModel());
  },
});
exports.expect = base.expect;
