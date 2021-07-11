const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "list",
      message: "How do we reach you?",
      name: "contacts",
      choices: ["Phone", "Email", "In Person", "Text"],
    },
  ])
  .then((answers) => {
    console.log(answers);
    fs.appendFile("answers.text", JSON.stringify(answers) + '\n', (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
