import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with empty username and empty password', () => {
      LoginPage.visit();
      LoginPage.UsernameEmpty();
      LoginPage.PasswordEmpty();      
      LoginPage.interceptLoginRequest();
      LoginPage.clickLogin();     
      LoginPage.waitRequired(); 
      LoginPage.assertRequiredMessage("Required");
      });
});
