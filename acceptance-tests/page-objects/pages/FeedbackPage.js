import { Selector, t } from 'testcafe';
import BasePage from './BasePage';

class FeedbackPage extends BasePage{
	constructor() {
		super();
		this.name = Selector('#name');
		this.email = Selector('#email');
		this.subject = Selector('#subject');
		this.comment = Selector('#comment');
		this.submitButton = Selector('.btn-signin');
		this.successMsg = Selector('.offset3');

		//const clearFormButton = Selector('.pull-right > input:nth-child(2)');
		//we can also target the selectors via their attributes:
		this.clearFormButton = Selector('input').withAttribute('value', 'Clear');
	}

	async fillForm(name, email, subject, comment) {
		await t
		.typeText(this.name, name, { paste: true, replace: true })
		.typeText(this.email, email, { paste: true, replace: true})
		.typeText(this.subject, subject, { paste: true, replace: true})
		.typeText(this.comment, comment, { paste: true, replace: true})
	}
}

export default FeedbackPage;
