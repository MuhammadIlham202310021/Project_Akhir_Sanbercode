import LoginPage from "../../../pom/LoginPage"; 

describe('OrangeHRM - Negative Test Case', () => {
    it('Login with invalid username and invalid password', () => {
        LoginPage.visit();
        LoginPage.enterUsername("Pegawai");
        LoginPage.enterPassword("adasaja");
        LoginPage.interceptLoginRequest();
        LoginPage.interceptLoginFailed();
        LoginPage.clickLogin();
        LoginPage.waitLoginRequest();
        LoginPage.waitLoginFailed();
        LoginPage.assertErrorMessage("Invalid credentials")
    });
});
