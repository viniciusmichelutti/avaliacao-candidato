import applicantPage from './pageobjects/applicant.page';

describe('applicant', function (done) {

    it('load page', function () {
        applicantPage.open();
    });
    
    describe('render', function() {
        it('should show page title', function () {
            browser.element('#welcome').isVisible().should.be.true;
        });
        
        it('should show name field', function () {
            applicantPage.nameField.isVisible().should.be.true;
        });

        it('should show email field', function () {
           applicantPage.emailField.isVisible().should.be.true;
        });
        
        it('should show skill sliders', function () {
            browser.element('span.irs').isVisible().should.be.true;
        });
        
        it('should show submit button', function() {
            applicantPage.submitButton.isVisible().should.be.true;
        });
    });
    
    describe('name', function() {
        it('should not be empty', function() {
            applicantPage.fillForm("", "viniciusmichelutti@gmail.com");
            applicantPage.submit();
            
            browser.element('#errorBlock').getText().should.not.be.empty;
        });
        
        it('should be greater than 3 characters', function() {
            applicantPage.fillForm("12", "viniciusmichelutti@gmail.com");
            applicantPage.submit();
            
            browser.element('#errorBlock').getText().should.not.be.empty;
        });
    });
    
    describe('email', function() {
        it('should validate invalid email', function() {
            applicantPage.fillForm("Vinicius", "vini");
            applicantPage.submit();
            browser.element('#errorBlock').getText().should.not.be.empty;
        });
        
        it('should validate incomplete email', function() {
            applicantPage.fillForm("Vinicius", "vini@gmail");
            applicantPage.submit();
            browser.element('#errorBlock').getText().should.not.be.empty;
        });
        
    });
});
