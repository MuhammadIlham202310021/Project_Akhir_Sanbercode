import forgotPassword from "../../../pom/forgot_password/forgotPassword";

describe('OrangeHRM - Forgot Password Test Case', () => {
    it ('Check Forgot Password page', () => {
        forgotPassword.visit();
        forgotPassword.interceptForgotPassword();
        forgotPassword.visitForgotPassword();
        forgotPassword.waitForgotPassword();
        forgotPassword.assertForgotPasswordPage();
    })

    it ('Check Cancel button on Forgot Password page', () => {
        forgotPassword.visit();
        forgotPassword.interceptForgotPassword();
        forgotPassword.visitForgotPassword();
        forgotPassword.waitForgotPassword();
        forgotPassword.clickCancel();
        forgotPassword.assertCancelButton();
    })  

    it ('Reset password with valid username', () => {
        forgotPassword.visit();
        forgotPassword.visitForgotPassword();
        forgotPassword.enterUsername('Admin');
        forgotPassword.interceptResetPassword();
        forgotPassword.clickReset();
        forgotPassword.waitForResetPassword();
        forgotPassword.assertResetNotification();
    })

    it ('Reset password with unregistered username', () => {
        forgotPassword.visit();
        forgotPassword.visitForgotPassword();
        forgotPassword.enterUsername('SayaUsername');
        forgotPassword.interceptResetPassword();
        forgotPassword.clickReset();
        forgotPassword.waitForResetPassword();
        forgotPassword.assertErrorMessage();
    })  

    it ('Reset password without entering username', () => {
        forgotPassword.visit();    
        forgotPassword.visitForgotPassword();
        forgotPassword.UsernameEmpty();
        forgotPassword.interceptRequiredMessage();
        forgotPassword.clickReset();
        forgotPassword.waitForRequiredMessage();
        forgotPassword.assertRequiredMessage("Required");
    })
    
})
