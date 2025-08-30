import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with invalid password and empty username', () => {
      LoginPage.visit();
      LoginPage.enterPassword('adasaja');
      LoginPage.UsernameEmpty();      
      LoginPage.interceptLoginRequest();
      LoginPage.clickLogin();     
      LoginPage.waitRequired(); 
      LoginPage.assertRequiredMessage("Required");
      });
});
