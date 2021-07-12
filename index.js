const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "list",
      message: "What is you title?",
      name: "titles",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ])
  .then((answers) => {
    console.log(answers);
    fs.writeFile("index.html", JSON.stringify(answers) + '\n', (error) => {
      if (error) {
        console.log(error);
      }
    });
  });

  function mainMenu(){

  }