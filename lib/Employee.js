const inquirer = require("inquirer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const { startHtml, addHtml } = require("../dist/generateMarkdown");
const employees = [];

class Employee {
  constructor(name = "", id = "", email = "", role = "") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  // function that will grab info every time a member is added
  getInfo() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "What is your Role?",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is this team member's name?",
        },
        {
          type: "input",
          name: "id",
          message: "what is their id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is this person's email?",
        },
      ])
      .then(({ name, role, email, id }) => {
        let roleInfo = "";
        if (role === "Manager") {
          roleInfo = "Office Number?";
        }
        if (role === "Engineer") {
          roleInfo = "Github username?";
        }
        if (role === "Intern") {
          roleInfo = "School?";
        }
        inquirer
          .prompt([
            {
              type: "input",
              message: `What is your team member's ${roleInfo}`,
              name: "roleInfo",
            },
            {
              type: "confirm",
              message: "would you like to add another member?",
              name: "anotherMember",
            },
          ])
          .then(({ roleInfo, anotherMember }) => {
            let newMember;
            if (role === "Manager") {
              newMember = new Manager(name, id, email, roleInfo);
            }
            if (role === "Engineer") {
              newMember = new Engineer(name, id, email, roleInfo);
            }
            if (role === "Intern") {
              newMember = new Intern(name, id, email, roleInfo);
            }
            employees.push(newMember);
            console.log("Member added!");
            if (anotherMember) {
              this.getInfo();
            }
            if (!anotherMember) {
              console.log("html posted to the src directory!");
            }

            addHtml(name, role, id, email, roleInfo);
          });
      });
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
