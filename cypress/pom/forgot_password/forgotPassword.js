// Page Object Model untuk halaman Forgot Password OrangeHRM

class ForgotPassword {

    // ==============================
    // Locator / Selector
    // ==============================
    InputUsername       = 'input[name="username"]';
    ForgotPasswordPage  = '.orangehrm-login-forgot';
    CancelButton        = 'button[type="button"]';
    ResetButton         = 'button[type="submit"]';

    // ==============================
    // Action Method
    // ==============================

    // Buka halaman login
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    // Klik link "Forgot your password?"
    visitForgotPassword() {
        cy.get(this.ForgotPasswordPage).click();
    }

    // Input Username
    enterUsername(username) {
        cy.get(this.InputUsername).type(username);
    }

    // Kosongkan input Username
    UsernameEmpty() {
        cy.get(this.InputUsername).should('have.value', '');
    }

    // Klik tombol Cancel
    clickCancel() {
        cy.get(this.CancelButton).click();
    }

    // Klik tombol Reset Password
    clickReset() {
        cy.get(this.ResetButton).click();
    }

    // ==============================
    // Assertion Method
    // ==============================

    // Validasi berada di halaman Forgot Password
    assertForgotPasswordPage() {
        cy.url().should('include', '/requestPasswordResetCode');
        cy.get('h6').should('contain', 'Reset Password');
    }

    // Validasi kembali ke halaman Login setelah klik Cancel
    assertCancelButton() { 
        cy.url().should('include', '/auth/login');
    }

    // Notifikasi berhasil reset password
    assertResetNotification() {
        cy.get('.orangehrm-card-container')
          .should('be.visible')
          .and('contain', 'Reset Password link sent successfully');
    }

    // Notifikasi input username kosong
    assertRequiredMessage(message) {
        cy.get('.oxd-input-field-error-message')
          .should('be.visible')
          .and('contain', message);
    }

    // Notifikasi username salah
    assertErrorMessage() {
        cy.get('.orangehrm-card-container')
          .should('be.visible')
          .and('contain', 'Reset Password link sent successfully');
    }

    // ==============================
    // Intercept & Wait Method
    // ==============================

    // Intercept halaman Forgot Password
    interceptForgotPassword() {
        cy.intercept('GET', '**/requestPasswordResetCode')
          .as('forgotPage'); 
    }
    waitForgotPassword() {
        cy.wait('@forgotPage');
    }

    // Intercept tombol Cancel
    interceptCancelButton() {
        cy.intercept(
            'GET', 
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        ).as('cancelButton');
    }
    waitForCancelButton() {
        cy.wait('@cancelButton');
    }

    // Intercept Reset Password
    interceptResetPassword() {
        cy.intercept(
            'GET', 
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset'
        ).as('resetRequest');
    }   
    waitForResetPassword() {
        cy.wait('@resetRequest');
    }

    // Intercept Required Message (input kosong)
    interceptRequiredMessage() {
        cy.intercept(
            'POST', 
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'
        ).as('resetRequest');
    }   
    waitForRequiredMessage() {
        cy.wait(500);
        cy.get('@resetRequest.all').should('have.length', 0);
    }
}

export default new ForgotPassword();
