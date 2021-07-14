const Engineer = require("../lib/Engineer");

const buildHTMLPage = function (html) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Display</title>
      <link rel="stylesheet" type="text/css" href="./style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div class="jumbotron">
        <h1>Team Profile</h1>
      </div>
      <div class="row-1">
      ${html}
   
    
        
      </div>
    </body>
  </html>`;
};

const cardManager = function (manager) {
  return `
<div class="card">
    <div class ="cardhead">
      <h2>${manager.name}</h2>
      <h3>Manager</h3>
    </div>
    <p>ID: ${manager.id}</p>
    <p>Email: ${manager.email}</p>
    <p>Office number: ${manager.number}</p>
  </div>   
    `;
};

const cardEngineer = function (engineer) {
  return `
  <div class="card">
      <div class ="cardhead">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
      </div>
      <p>ID: ${engineer.id}</p>
      <p>Email: ${engineer.email}</p>
      <p>GitHub: ${engineer.account}</p>
    </div>   
      `;
};

const cardIntern = function (intern) {
  return `
  <div class="card">
      <div class ="cardhead">
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
      </div>
      <p>ID: ${intern.id}</p>
      <p>Email: ${intern.email}</p>
      <p>Office number: ${intern.number}</p>
    </div>   
      `;
};

const makeHTML = function (teamArray) {
  let html = "";
  for (let i = 0; i < teamArray.length; i++) {
    let job = teamArray[i].getRole();
    if (job === "Manager") {
      const manager = cardManager(teamArray[i]);

      html = html.concat(manager);
    }
    if (job === "Engineer") {
      const engineer = cardEngineer(teamArray[i]);

      html = html.concat(engineer);
    }
    if (job === "Manager") {
      const intern = cardIntern(teamArray[i]);

      html = html.concat(intern);
    }
  }
  return buildHTMLPage(html);
};
module.exports = makeHTML;
