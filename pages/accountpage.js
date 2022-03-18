const { expect } = require('@playwright/test');

exports.AccountsPage = class AccountsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.myAccountBtn = page.locator('.dropdown');
    this.logOutBtn =  page.locator('#link-sign-out')
  }

  async goto() {
    await this.page.goto('https://staging.paymi.com/dashboard/accounts');
  }

  async isLoggedIn(){
    return this.myAccountBtn.isVisible()
  }

  async logOut(){
    if (await this.isLoggedIn() === true) {
      await this.myAccountBtn.click()
      await this.page.waitForSelector('.dropdown-menu')
      await this.logOutBtn.click()
    }
  }
}