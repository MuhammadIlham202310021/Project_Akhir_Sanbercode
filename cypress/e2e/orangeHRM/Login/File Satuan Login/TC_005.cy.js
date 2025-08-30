import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with valid username and empty password', () => {
      LoginPage.visit();
      LoginPage.enterUsername('Admin');
      LoginPage.PasswordEmpty();
      LoginPage.interceptLoginRequest();
      LoginPage.clickLogin();     
      LoginPage.waitRequired(); 
      LoginPage.assertRequiredMessage("Required");
      });
});
