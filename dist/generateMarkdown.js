const fs = require('fs');

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
    <nav> I am idiot </nav>
    `
   
    fs.writeFile("./src/team.html", html, (err) => {
        if(err) {console.log('error', err);
    }})}

function addHtml(name, role, id, email, roleInfo) {
        let data = "";
        if(role === 'Engineer') {

        }      
        if(role === 'Manager') {
            const html = `<div> I too am an idiot </div>`
            fs.appendFile("./src/team.html", html, (err) => {
                if(err) {console.log('error', err);}
})}
        if(role === 'Intern') {

        }
        else {
            console.log('nothing')}
}

module.exports = {
    startHtml,
    addHtml
}
