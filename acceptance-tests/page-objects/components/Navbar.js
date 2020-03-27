import { Selector, t } from 'testcafe';

class Navbar {
	constructor() {
		// SELECTORS
		this.searchBox = Selector('#searchTerm');
		this.singInButton = '#signin_button';
		this.userIcon = Selector('.icon-user');
		this.logoutButton = Selector('#logout_link');
	}

	// FUNCTIONS
	async search(text) {
		await t
			.typeText(this.searchBox, text, { paste: true, replace: true })
			.pressKey('enter');
	}
}

export default Navbar;
