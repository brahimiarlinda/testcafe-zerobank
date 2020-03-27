/* End-to-End Test of the Pay-bill functionallity 
   Without Page-Object loging, but by using a separate file to store selectors
*/
import { Selector} from 'testcafe';
import { fillAddNewPayeeForm } from '../support/helpers';
import {
	payBillTab,
	addNewPayeeTab,
	addPayeeButton,
	successMsgNewPayeeAdded
} from '../support/selectors/pay-bills.selectors';

import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';

const loginPage = new LoginPage();
const navbar = new Navbar();

// prettier-ignore
fixture `Search Test`
	.page `http://zero.webappsecurity.com/index.html`;
	
test('I can add a new payment to the list', async t => {
		await t.click(navbar.singInButton);
		loginPage.loginToApp('username', 'password');
		await t.click(payBillTab).click(addNewPayeeTab);
		await fillAddNewPayeeForm();
		await t.click(addPayeeButton);
		await t.expect(Selector(successMsgNewPayeeAdded).exists).ok();
});