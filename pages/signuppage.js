const { expect } = require('@playwright/test');

exports.SignupPage = class SignupPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailField = page.locator('#user_email')
    this.passwordField = page.locator('#user_password')
    this.iagreeCheckBox = page.locator('label:has-text("I agree to Paymi\'s Terms and Conditions")')
    this.signUpBtn = page.locator('.register .btn[name="commit"]')
  }

  async goto() {
    await this.page.goto('https://staging.paymi.com/users/sign_up');
  }

  async fillEmailField(user_email) {
    await this.emailField.click();
    await this.emailField.fill(user_email);
  }

  async fillPasswordField(user_password) {
    await this.passwordField.click();
    await this.passwordField.fill(user_password);
  }

  async iagreeCheck() {
    await this.iagreeCheckBox.click();
  }

  async signUp() {
    await this.signUpBtn.click();
  }
}