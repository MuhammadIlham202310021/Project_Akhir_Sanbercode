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


    // Cari berdasarkan nama
    it ('Search employee by name', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.employeeNameInput('Rohini Bhosle');
        directory.clickSearch();
        directory.waitForDirectory();
        directory.assertEmployeeFound('Rohini Bhosle');
    });
    

})