const inquirer = require("inquirer");
class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
