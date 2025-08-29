import forgotPassword from "../../../pom/forgot_password/forgotPassword.cy";

describe('OrangeHRM - Forgot Password Test Case', () => {
    it ('Reset password with unregistered username', () => {
            forgotPassword.visit();
            forgotPassword.visitForgotPassword();
            forgotPassword.enterUsername('SayaUsername');
            forgotPassword.interceptResetPassword();
            forgotPassword.clickReset();
            forgotPassword.waitForResetPassword();
            forgotPassword.assertErrorMessage();
        })  
})