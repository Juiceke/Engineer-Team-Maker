const inquirer = require("inquirer");
class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
