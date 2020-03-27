import { Selector, t } from 'testcafe';

class AccountSummaryPage {
	constructor() {
		this.accountSummary = Selector('#account_summary_tab');
	}
}

export default AccountSummaryPage;
