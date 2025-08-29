import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with invalid username and empty password', () => {
      LoginPage.visit();
      LoginPage.enterUsername('Pegawai');
      LoginPage.PasswordEmpty();      
      LoginPage.interceptLoginRequest();
      LoginPage.clickLogin();     
      LoginPage.waitRequired(); 
      LoginPage.assertRequiredMessage("Required");
      });
});
