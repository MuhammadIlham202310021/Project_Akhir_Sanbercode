import forgotPassword from "../../../pom/forgot_password/forgotPassword.cy";

describe('OrangeHRM - Forgot Password Test Case', () => {
    it ('Reset password with valid username', () => {
            forgotPassword.visit();
            forgotPassword.visitForgotPassword();
            forgotPassword.enterUsername('Admin');
            forgotPassword.interceptResetPassword();
            forgotPassword.clickReset();
            forgotPassword.waitForResetPassword();
            forgotPassword.assertResetNotification();
        })
})