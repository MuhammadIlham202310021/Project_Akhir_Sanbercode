import directory from "../../../pom/dashboard_directory/directory";

describe('OrangeHRM - Directory Test Case', () => {
    // Login before each test
    beforeEach(() => {
        directory.visit();
        directory.enterUsername('Admin');
        directory.enterPassword('admin123');    
        directory.clickLogin();
        directory.assertLoginSuccess();
        cy.wait (10000)
    });

    it ('Visit Directory Page', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.assertDirectoryPage();
    })

    it ('Search employee by name', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.clickSearch();
        directory.waitForDirectory();
        directory.employeeNameInput('Test Data 1');
        directory.assertEmployeeFound('Test Data 1');
    });

    it('Filter employee by Job Title', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.filterByJobTitle('HR Manager');
        directory.clickSearch();
        directory.waitForDirectory();
        directory.assertEmployeeFoundByJob('HR Manager');
        directory.assertcardFoundByJob('HR Manager')
    })

    it('Filter employee by Location', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.filterByLocation('Texas R&D');
        directory.clickSearch();
        directory.waitForDirectory();
        directory.assertEmployeeFoundByLocation('Texas R&D');
        directory.assertcardFoundByLocation('Texas R&D');
    });

})