import { Selector } from 'testcafe';

class ForgottenPasswordPage {
	constructor() {
		this.userEmail = Selector('#user_email')
		this.successEmailSentPage = Selector('h3');
	}
}

export default ForgottenPasswordPage;
