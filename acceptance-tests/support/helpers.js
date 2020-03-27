import { t } from 'testcafe';
import {
	payeeName,
	payeeAddress,
	payeeAccount,
	payeeDetails
} from '../support/selectors/pay-bills.selectors';

export async function fillAddNewPayeeForm() {
	await t
		.typeText(payeeName, 'Arlinda')
		.typeText(payeeAddress, 'Berliner 34, 85854, Germany')
		.typeText(payeeAccount, 'DE12345678123456')
		.typeText(payeeDetails, 'Payee Details random');
}
