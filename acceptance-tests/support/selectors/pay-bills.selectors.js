import { Selector } from 'testcafe';

const payBillTab = '#pay_bills_tab';
const addNewPayeeTab = Selector('a').withText('Add New Payee');

//new payee form
const payeeName = '#np_new_payee_name';
const payeeAddress = '#np_new_payee_address';
const payeeAccount = '#np_new_payee_account';
const payeeDetails = '#np_new_payee_details';

const addPayeeButton = '#add_new_payee';
const successMsgNewPayeeAdded = '.alert-success';

export {
	payBillTab,
	addNewPayeeTab,
	payeeName,
	payeeAddress,
	payeeAccount,
    payeeDetails,
    addPayeeButton,
    successMsgNewPayeeAdded
};
