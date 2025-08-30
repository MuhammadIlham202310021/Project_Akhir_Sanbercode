import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with valid password and empty username', () => {
      LoginPage.visit();
      LoginPage.enterPassword('admin123');
      LoginPage.UsernameEmpty();      
      LoginPage.interceptLoginRequest();
      LoginPage.clickLogin();     
      LoginPage.waitRequired(); 
      LoginPage.assertRequiredMessage("Required");
      });
});
