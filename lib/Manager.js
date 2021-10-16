const inquirer = require('inquirer');
const Employee = require('./Employee');
class Manager {
constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

getName() {
    return this.name = name
    }
    
    getId() {
    inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'What id number does this team member have?'
    })
    .then(({ id }) => {
        console.log(id);
        this.id = id;
        console.log(this.name);
        this.getEmail()
    })
    }
    
    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'What is the email of this team member?'
        })
        .then(({ email }) => {
            this.email = email;
    })
    }

getOfficeNumber() {

}

getRole() {
    return 'Manager'
}
}

module.exports = Manager;