/* Funciton Test of Feedback Page 
   Using Page-Object logic
*/
import FeedbackPage from '../page-objects/pages/FeedbackPage';
const feedbackpage = new FeedbackPage();

// prettier-ignore
fixture `Feedback Test`
    .page`http://zero.webappsecurity.com/feedback.html`;

test('I can send feedback if all the fieds are filled', async t => {
	feedbackpage.fillForm(
		'Arli',
		'random@mail.com',
		'random subject',
		'random comment'
	);
	feedbackpage.waitFor(2000); // this is a function of the superclass of FeedbackPage which is the BasePage
	await t.click(feedbackpage.submitButton);
	await t
		.expect(feedbackpage.successMsg.innerText)
		.contains('Thank you for your comments,');
});

test('I can clear the form', async t => {
	feedbackpage.fillForm(
		'Arli',
		'random@mail.com',
		'random subject',
		'random comment'
	);
	await t.setTestSpeed(0.01); //example of slowing down the testspeed to debug
	await t.click(feedbackpage.clearFormButton);
	/*
    Here we are suppose to assert that the form is clear. 
    This is not possible because there is no indicator at the codebase.
    Sometimes the code is not testable, but we can change it to be testabe.
    */
});

test.skip('I cannot send feedback if all the fields are empty', async t => {
	//scneario steps
});

test.skip('I cannot send feedback if name is missing', async t => {
	//scneario steps
});

test.skip('I cannot send feedback if email is missing', async t => {
	//scneario steps
});

test.skip('I cannot send feedback if subject is missing', async t => {
	//scneario steps
});

test.skip('I cannot send feedback if question is missing', async t => {
	//scneario steps
});
