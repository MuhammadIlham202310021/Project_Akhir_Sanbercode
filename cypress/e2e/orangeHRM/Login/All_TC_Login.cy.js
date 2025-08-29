import LoginPage from "../../../pom/login/LoginPage.js";

describe('OrangeHRM - Positive & Negative Test Case', () => {
    
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

    it('Login with valid username and empty password', () => {
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.PasswordEmpty();
        LoginPage.interceptLoginRequest();
        LoginPage.clickLogin();     
        LoginPage.waitRequired(); 
        LoginPage.assertRequiredMessage("Required");
    });
    
    it('Login with invalid username and empty password', () => {
        LoginPage.visit();
        LoginPage.enterUsername('Pegawai');
        LoginPage.PasswordEmpty();      
        LoginPage.interceptLoginRequest();
        LoginPage.clickLogin();     
        LoginPage.waitRequired(); 
        LoginPage.assertRequiredMessage("Required");
    });

    it('Login with valid password and empty username', () => {
        LoginPage.visit();
        LoginPage.enterPassword('admin123');
        LoginPage.UsernameEmpty();      
        LoginPage.interceptLoginRequest();
        LoginPage.clickLogin();     
        LoginPage.waitRequired(); 
        LoginPage.assertRequiredMessage("Required");
    });
    
    it('Login with invalid password and empty username', () => {
        LoginPage.visit();
        LoginPage.enterPassword('adasaja');
        LoginPage.UsernameEmpty();      
        LoginPage.interceptLoginRequest();
        LoginPage.clickLogin();     
        LoginPage.waitRequired(); 
        LoginPage.assertRequiredMessage("Required");
    });

    it('Login with empty username and empty password', () => {
        LoginPage.visit();
        LoginPage.UsernameEmpty();
        LoginPage.PasswordEmpty();      
        LoginPage.interceptLoginRequest();
        LoginPage.clickLogin();     
        LoginPage.waitRequired(); 
        LoginPage.assertRequiredMessage("Required");
    });
    
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
    
    it('Login with valid username in all uppercase and valid password', () => {
        LoginPage.visit();
        LoginPage.enterUsername('ADMIN')
        LoginPage.enterPassword('admin123')
        LoginPage.interceptLoginRequest();
        LoginPage.interceptLoginFailed();
        LoginPage.clickLogin();
        LoginPage.waitLoginRequest();
        LoginPage.waitLoginFailed();
        LoginPage.assertLoginSuccess();
    });

});
