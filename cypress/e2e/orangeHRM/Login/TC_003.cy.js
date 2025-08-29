import LoginPage from "../../../pom/LoginPage";

describe('OrangeHRM - Negative Test Case', () => {
  it('Login with invalid username and valid password', () => {
      LoginPage.visit();
      LoginPage.enterUsername("Pegawai");
      LoginPage.enterPassword("admin123");
      LoginPage.interceptLoginRequest();
      LoginPage.interceptLoginFailed();
      LoginPage.clickLogin();
      LoginPage.waitLoginRequest();
      LoginPage.waitLoginFailed();
      LoginPage.assertErrorMessage('Invalid credentials');
      });
});
