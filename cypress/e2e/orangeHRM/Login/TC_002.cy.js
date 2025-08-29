import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with valid username and invalid password', () => {
      LoginPage.visit();
      LoginPage.enterUsername('Admin');
      LoginPage.enterPassword('adasaja');
      LoginPage.interceptLoginRequest();
      LoginPage.interceptLoginFailed();
      LoginPage.clickLogin();
      LoginPage.waitLoginRequest();
      LoginPage.waitLoginFailed();
      LoginPage.assertErrorMessage("Invalid credentials")
    });
});
