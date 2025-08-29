// Page Object Model untuk halaman Login OrangeHRM

class LoginPage {

    // ==============================
    // Locator / Selector
    // ==============================
    usernameInput   = 'input[name="username"]';
    passwordInput   = 'input[name="password"]';
    loginButton     = 'button[type="submit"]';
    dashboardHeader = 'h6';
    errorMessage    = '.oxd-alert-content';
    requiredMessage = '.oxd-input-field-error-message';

    // ==============================
    // Action Method
    // ==============================

    // Buka halaman login
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    // Isi Username
    enterUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    // Isi Password
    enterPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    // Klik tombol Login
    clickLogin() {
        cy.get(this.loginButton).click();
    }

    // ==============================
    // Assertion Method
    // ==============================

    // Validasi berhasil login
    assertLoginSuccess() {
        cy.url().should('include', '/dashboard'); 
        cy.get(this.dashboardHeader).should('contain', 'Dashboard');
    }

    // Validasi pesan error (username / password salah)
    assertErrorMessage(message) {
        cy.get(this.errorMessage)
          .should('be.visible')
          .and('contain', message);
    }

    // Validasi input password kosong
    PasswordEmpty() {
        cy.get(this.passwordInput).should('have.value', '');
    }

    // Validasi input username kosong
    UsernameEmpty() {
        cy.get(this.usernameInput).should('have.value', '');
    }

    // Validasi pesan "Required" saat input kosong
    assertRequiredMessage(message) {
        cy.get(this.requiredMessage)
          .should('be.visible')
          .and('contain', message);
    }

    // ==============================
    // Intercept & Wait Method
    // ==============================

    // Intercept untuk login valid
    interceptLoginValid() {
        cy.intercept(
            'GET', 
            'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary'
        ).as('loginValid');
    }
    waitLoginValid() {
        cy.wait('@loginValid');
    }

    // Intercept untuk login gagal
    interceptLoginFailed() {
        cy.intercept(
            'GET', 
            'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages'
        ).as('loginFailed');
    }
    waitLoginFailed() {
        cy.wait('@loginFailed');
    }

    // Intercept untuk request POST login
    interceptLoginRequest() {
        cy.intercept(
            'POST', 
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'
        ).as('loginRequest');
    }
    waitLoginRequest() {
        cy.wait('@loginRequest');
    }

    // Validasi tidak ada request saat input kosong
    waitRequired() {
        cy.wait(500);
        cy.get('@loginRequest.all').should('have.length', 0);
    }
}

export default new LoginPage();
