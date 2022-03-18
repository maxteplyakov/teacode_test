const { faker } = require('@faker-js/faker');

exports.UserModel = class UserModel {
    constructor() {
      this.email = faker.internet.email();
      this.password = faker.internet.password(10, false, /\w/, 'aA1!')
    }
}