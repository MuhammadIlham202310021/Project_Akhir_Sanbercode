import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with valid username in all lowercase and valid password', () => {
      LoginPage.visit();
      LoginPage.enterUsername('admin')
      LoginPage.enterPassword('admin123')
      LoginPage.interceptLoginRequest();
      LoginPage.interceptLoginFailed();
      LoginPage.clickLogin();
      LoginPage.waitLoginRequest();
      LoginPage.waitLoginFailed();
      LoginPage.assertLoginSuccess();
      });
});
