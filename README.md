# testcafe-zerobank
### A short but dense overview of the [Automated Software Testing with TestCafe](https://www.udemy.com/course/automated-testing-with-testcafe/) udemy course.
### What it covers:
* UI test case scenarios (end-to-end and functional).
* Cross-browser Testing.
* Parallel Testing.
* Page-Object logic.
* TestCafe main functionallity and syntax.
### How to run the tests locally.
1. Clone the repo.
2. Run `$ npm install`
3. Run `$ npm run test:chrome` or any other script mentioned in the package.json file.
### How to install and configure Jenkins in order to run the tests via it:
1. Download the Generic Java package (.war) from https://jenkins.io/download/ 
2. Place the dowloaded file in the root of your project
3. Spinup an local Jenkins server by running this command at your terminal: `$ java -jar jenkins.war -httpPort=8080 --enable-future-java`. You should see the message, "Jenkins is fully up and running".
4. Follow the wizard of the page by adding the key, choosing recommended plugins to be installed and settingup the credentials you prefer.
5. Creat a new build by clicking top-left "New item", give a name to the project, select "Freestyle project" and click "OK.
6. To the configuration seen:
		- click on Advanced
		- select the checkbox "Use custom workspace"
		- provide the path of the project. To take the path run the command `$ pwd` at your terminal and paste the path to the "Directory". This way Jenkins would know where to look for the project.
		- at the "Build ", click on "Add build step" > Execute shell > Command: npm run test:chrome:headless
7. Click on "Save" bottom-left.
8. To the project you just created, click on "Build Now" on the left. And it will grab your project and build it and run your script to run the tests in headless-mode in chrome.
9. Click inside the build (small buble) and go to the "Console Output" on the left in order to visualize the report of the test-run.
### How to select multiple chocies of the scripts shown in the package.json file
1. Go to Jenkins at your project and click "Configure" on the left. The path should look like this: `http://localhost:8080/job/testcafe-zerobank/`
2. Click on "This project is parametrized" > Add parameter> Choice Parameter> Name: script> add the script you want from the package.json file of your project, e.g. test:chrome
		test:firefox 
		test:chrome:5
		test:chrome:headless
		test:chrome:mobile
		test:multiple
		test:safari
3. Add description, e.g. "Select the browser you want to run your tets".
4. Modify the Build command by adding at the Build > Execute shell > Command: `npm run "$scrip"`
5. Click on "Save" bottom-left
6. You will notice on the left we see "Build with Parameters" instead of "Build".
7. You can  click "Build with Parameters" in order to run the tests in the browser you prefer.
### Notes
* You need to have locally the browsers you want to run the tests. For example, if you don't have safari installed locally, then you cannot run the script `npm run test:safari`
* The webpage tested is a sample website given by the udemy course itself http://zero.webappsecurity.com/index.html
* The tests run only locally.
