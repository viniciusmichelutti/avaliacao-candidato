import Page from './Page';

class ApplicantPage extends Page {
    get nameField() { return browser.element('[name=completeName]'); }
    get emailField() { return browser.element('[name=email]'); }
    get submitButton() { return browser.element('input[type=submit]'); }
    
    open() {
        super.open('');
    }
    
    fillForm(username, email) {
		this.nameField.setValue(username);
		this.emailField.setValue(email);
	}
    
    submit() {
		this.submitButton.click();
	}
}

module.exports = new ApplicantPage();
