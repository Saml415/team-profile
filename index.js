const inquirer = require("inquirer");
const fs = require("fs");
const makeHTML = require("./src/makeHTML");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];
const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number.",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
     
    });
};

const employeePrompt= () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Is your employee an Engineer or an Intern?",
        name: "job",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
      },
      {
        type: "input",
        name: "account",
        message: "What is your Engineers GitHub account?",
        when: (input) => input.job === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school did your intern attend?",
        when: (input) => input.job === "Intern",
      },
      {
        type: "confirm",
        name: "recruit",
        message: "Would you like to add another employees?",
        default: false
      },
    ])
    .then((employeeInput) => {
      const { job, name, id, email, account, school, recruit } = employeeInput;
      let employee;

      if (job === "Engineer") {
        employee = new Engineer(name, id, email, account);
      } else if (job === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      teamArray.push(employee);
      console.log(employee);
      if (recruit) {
        return employeePrompt(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  console.log(data)
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team Profile Generated!!!");
    }
  })
};

managerPrompt()
  .then(employeePrompt)
  .then(teamArray => {
    return makeHTML(teamArray);
  })
  .then(fileHTML => {
    console.log(fileHTML)
    return writeFile(fileHTML);
  })
  .catch(err => {
    console.log(err);
  });

