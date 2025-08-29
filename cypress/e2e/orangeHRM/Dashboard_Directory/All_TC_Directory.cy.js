import directory from "../../../pom/dashboard_directory/directory";

describe('OrangeHRM - Directory Test Case', () => {
    // Login before each test
    beforeEach(() => {
        directory.visit();
        directory.enterUsername('Admin');
        directory.enterPassword('admin123');    
        directory.clickLogin();
        directory.assertLoginSuccess();
    });

    it ('Visit Directory Page', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.assertDirectoryPage();
    })

    it ('Search employee by name', () => {
        directory.interceptDirectory();
        directory.waitForDirectory();
        directory.visitDirectory();
        directory.clickSearch();
        directory.employeeNameInput('Rohini Bhosle');
        directory.assertEmployeeFound('Rohini Bhosle');
        directory.waitForDirectory();
    });

    it('Filter employee by Job Title', () => {
        directory.interceptDirectory();
        directory.visitDirectory();
        directory.waitForDirectory();
        directory.filterByJobTitle('Account Assistant');
        directory.clickSearch();
        directory.waitForDirectory();
        directory.assertEmployeeFoundByJob('Account Assistant');
        directory.assertcardFoundByJob('Account Assistant')
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