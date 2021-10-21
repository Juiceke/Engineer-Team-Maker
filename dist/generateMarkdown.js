const fs = require("fs");

function startHtml() {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
    <nav><h1>Team Members</h1></nav>
    <div class="card-container">`;

  fs.writeFile("./src/team.html", html, (err) => {
    if (err) {
      console.log("error", err);
    }
  });
}

function addHtml(name, role, id, email, roleInfo) {
  let data = "";
  if (role === "Engineer") {
    const html = `
            <div class="card">
                <div class="card-header">
                    <h2>${name}</h2>
                    <h3>${role}</h3>
                </div>
                <div class="card-body">
                    <h5>ID: ${id}</h5>
                    <h5>
                        Email: <a href="mailto:${email}">${email}</a>
                    </h5>
                    <h5>
                        Github: <a href="https://github.com/${roleInfo}">${roleInfo}</a>
                    </h5>
                </div>
            </div>`;
    fs.appendFile("./src/team.html", html, (err) => {
      if (err) {
        console.log("error", err);
      }
    });
  }
  if (role === "Manager") {
    const html = `
    <div class="card">
        <div class="card-header">
            <h2>${name}</h2>
            <h3>${role}</h3>
        </div>
    <div class="card-body">
        <h5>ID: ${id}</h5>
        <h5>
            Email: <a href="mailto:${email}">${email}</a>
        </h5>
        <h5>
            Office Number: ${roleInfo}
        </h5>
    </div>
</div>`;
    fs.appendFile("./src/team.html", html, (err) => {
      if (err) {
        console.log("error", err);
      }
    });
  }
  if (role === "Intern") {
    const html = `
    <div class="card">
        <div class="card-header">
            <h2>${name}</h2>
            <h3>${role}</h3>
        </div>
    <div class="card-body">
        <h5>ID: ${id}</h5>
        <h5>
            Email: <a href="mailto:${email}">${email}</a>
        </h5>
        <h5>
            School: ${roleInfo}
        </h5>
    </div>
</div>`;
    fs.appendFile("./src/team.html", html, (err) => {
      if (err) {
        console.log("error", err);
      }
    });
  }
}

module.exports = {
  startHtml,
  addHtml,
};
