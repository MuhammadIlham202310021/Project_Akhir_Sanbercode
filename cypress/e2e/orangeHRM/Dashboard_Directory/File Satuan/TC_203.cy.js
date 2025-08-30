import directory from "../../../../pom/dashboard_directory/directory"; 

describe('OrangeHRM - Directory Test Case', () => {
    // Login sukses 
    beforeEach(() => {
            directory.visit();
            directory.enterUsername('Admin');
            directory.enterPassword('admin123');
            directory.clickLogin();
            directory.assertLoginSuccess();
        });

    //Cari berdasarkan job 
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
    
})