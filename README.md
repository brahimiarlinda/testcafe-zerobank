# testcafe-zerobank
### A short but dense overview of the [Automated Software Testing with TestCafe](https://www.udemy.com/course/automated-testing-with-testcafe/) udemy course.
### What it covers:
* UI test case scenarios (end-to-end and functional).
* Cross-browser Testing.
* Parallel Testing.
* Page-Object logic.
* TestCafe main functionallity and syntax.
### How to run the tests locally.
* Clone the repo.
* Run `$ npm install`
* Run `$ npm run test:chrome` or any other script mentioned in the package.json file.
### How to install and configure Jenkins in order to run the tests via it:
* Download the Generic Java package (.war) from https://jenkins.io/download/ 
* Place the dowloaded file in the root of your project
* Spinup an local Jenkins server by running this command at your terminal: `$ java -jar jenkins.war -httpPort=8080 --enable-future-java`. You should see the message, "Jenkins is fully up and running". You can also create a script in the package.json for this long command, so you can spinup the server easier by running: `$ npm run start-jenkins-server`
* Follow the wizard of the page by adding the key, choosing recommended plugins to be installed and settingup the credentials you prefer.
* Creat a new build by clicking top-left "New item", give a name to the project, select "Freestyle project" and click "OK.
* To the configuration seen:
		- click on Advanced
		- select the checkbox "Use custom workspace"
		- provide the path of the project. To take the path run the command `$ pwd` at your terminal and paste the path to the "Directory". This way Jenkins would know where to look for the project.
		- at the "Build ", click on "Add build step" > Execute shell > Command: npm run test:chrome:headless
* Click on "Save" bottom-left.
* To the project you just created, click on "Build Now" on the left. And it will grab your project and build it and run your script to run the tests in headless-mode in chrome.
* Click inside the build (small buble) and go to the "Console Output" on the left in order to visualize the report of the test-run.
### How to select multiple chocies of the scripts shown in the package.json file
* Go to Jenkins at your project and click "Configure" on the left. The path should look like this: `http://localhost:8080/job/testcafe-zerobank/`
* Click on "This project is parametrized" > Add parameter> Choice Parameter> Name: script> add the script you want from the package.json file of your project, e.g. test:chrome
		test:firefox 
		test:chrome:5
		test:chrome:headless
		test:chrome:mobile
		test:multiple
		test:safari
* Add description, e.g. "Select the browser you want to run your tets".
* Modify the Build command by adding at the Build > Execute shell > Command: `npm run "$scrip"`
* Click on "Save" bottom-left
* You will notice on the left we see "Build with Parameters" instead of "Build".
* You can  click "Build with Parameters" in order to run the tests in the browser you prefer.
### JSON Reporter:
* Install it with `$ npm install testcafe-reporter-json`
* Add  `--reporter json` parameter to the test-run script, e.g. `"test:chrome": "testcafe chrome ./acceptance-tests/tests -s takeOnFails=true --reporter json"`
* Run the tests with `npm run test:chrome`
* You will notice that the report of the test-run is printed in a json format at your terminal.
Hint: You can export this report to a database and perform visualizations or calculate database.
### xNunit Reporter:
* Install it with `$ npm install testcafe-reporter-xunit`
* Add  `--reporter xunit` parameter to the test-run script, e.g. `"test:chrome": "testcafe chrome ./acceptance-tests/tests -s takeOnFails=true --reporter xunit"`
* Run the tests with `npm run test:chrome`
* You will notice that the report of the test-run is printed in an XML format at your terminal.
Hint: You can export this report to a database and perform visualizations or calculate database.
### xNunit Reporter (same like xNunit it generates XML report but the format is slightly different):
* Install it with `$ npm install testcafe-reporter-nunit`
* Add  `--reporter nunit` parameter to the test-run script, e.g. `"test:chrome": "testcafe chrome ./acceptance-tests/tests -s takeOnFails=true --reporter nunit"`
* Run the tests with `npm run test:chrome`
* You will notice that the report of the test-run is printed in an XML format at your terminal.
Hint: For visualization of the test run, which tests passed/failed.
### List Reporter (it is very similar to the mocka reporter):
* Install it with `$ npm install testcafe-reporter-list`
* Add  `--reporter list` parameter to the test-run script, e.g. `"test:chrome": "testcafe chrome ./acceptance-tests/tests -s takeOnFails=true --reporter list"`
* Run the tests with `npm run test:chrome`
* You will notice that the report of the test-run is printed in an XML format at your terminal.
Hint: You can export this report to a database and perform visualizations or calculate database. It is recommended for Production reporting.
### Minimal Reporter (recommended for santiy checks because its not detailed):
* Install it with `$ npm install testcafe-reporter-minimal`
* Add  `--reporter minimal` parameter to the test-run script, e.g. `"test:chrome": "testcafe chrome ./acceptance-tests/tests -s takeOnFails=true --reporter minimal"`
* Run the tests with `npm run test:chrome`
* You will notice that the report of the test-run is printed in an XML format at your terminal.
Hint: For sanity checks recommended because it prints just dots.
### Notes
* You need to have locally the browsers you want to run the tests. For example, if you don't have safari installed locally, then you cannot run the script `npm run test:safari`
* The webpage tested is a sample website given by the udemy course itself http://zero.webappsecurity.com/index.html
* The tests run only locally.
