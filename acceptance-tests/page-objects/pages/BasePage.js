import { Selector, t } from 'testcafe';

class BasePage {
	async waitFor(ms) {
		await t.wait(ms);
	}

	async setTestSpeed(speedlevel) {
		await t.setTestSpeed(speedlevel);
	}
}

export default BasePage;
