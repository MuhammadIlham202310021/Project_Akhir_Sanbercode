import directory from "../../../pom/dashboard_directory/directory"; 

describe('OrangeHRM - Directory Test Case', () => {
    // Login sukses 
    beforeEach(() => {
        directory.visit();
        directory.enterUsername('Admin');
        directory.enterPassword('admin123');
        directory.clickLogin();
        directory.assertLoginSuccess();
    });

    // Navigasi ke halaman Directory
    it ('Visit Directory Page', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.assertDirectoryPage();
    })

})