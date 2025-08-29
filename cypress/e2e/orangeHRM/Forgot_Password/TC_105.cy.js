import forgotPassword from "../../../pom/forgot_password/forgotPassword.cy";

describe('OrangeHRM - Forgot Password Test Case', () => {
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