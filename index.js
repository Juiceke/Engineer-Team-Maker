const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const {startHtml, addHtml} = require('./dist/generateMarkdown')
// make first bit of html
startHtml()
new Employee().getInfo();

