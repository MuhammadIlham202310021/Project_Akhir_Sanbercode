import forgotPassword from "../../../pom/forgot_password/forgotPassword.cy";

describe('OrangeHRM - Forgot Password Test Case', () => {
    it ('Check Cancel button on Forgot Password page', () => {
            forgotPassword.visit();
            forgotPassword.interceptForgotPassword();
            forgotPassword.visitForgotPassword();
            forgotPassword.waitForgotPassword();
            forgotPassword.clickCancel();
            forgotPassword.assertCancelButton();
        })  
})