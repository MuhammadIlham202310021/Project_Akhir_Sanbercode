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
    

    //Cari berdasarkan location
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