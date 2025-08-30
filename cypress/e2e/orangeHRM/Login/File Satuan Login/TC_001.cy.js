import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Positive Test Case', () => {
  it('Login with valid username and valid password', () => {
          LoginPage.visit();
          LoginPage.enterUsername('Admin');
          LoginPage.enterPassword('admin123');
          LoginPage.interceptLoginRequest();
          LoginPage.interceptLoginValid();
          LoginPage.clickLogin();
          LoginPage.waitLoginRequest();
          LoginPage.waitLoginValid();
          LoginPage.assertLoginSuccess();
      });
});
