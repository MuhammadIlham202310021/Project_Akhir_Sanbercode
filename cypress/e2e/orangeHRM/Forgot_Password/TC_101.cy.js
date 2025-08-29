import forgotPassword from "../../../pom/forgot_password/forgotPassword";

describe('OrangeHRM - Forgot Password Test Case', () => {
    it ('Cek halaman lupa password', () => {
        // Step 1: Buka halaman login
        forgotPassword.visit();

        // intercept request forgot password page
        forgotPassword.interceptForgotPassword();

        // Step 2: Klik link lupa password
        forgotPassword.visitForgotPassword();

        //wait for intercept
        forgotPassword.waitForgotPassword();

        // Assertion: pastikan berada di halaman lupa password
        forgotPassword.assertForgotPasswordPage();
        })
})