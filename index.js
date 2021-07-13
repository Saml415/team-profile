const inquirer = require("inquirer");
const fs = require("fs");
const makeHTML = require('./src/makeHTML')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teamArray = []
const managerPrompt = () => {
  return inquirer.prompt ([
      {
          type: 'input',
          name: 'name',
          message: 'Who is the manager of this team?', 
          
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter the manager's ID.",
          
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter the manager's email.",
          
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "Please enter the manager's office number.",
      }
  ])
  .then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      teamArray.push(manager); 
      console.log(manager); 
  })
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: "Is your employee an Engineer or an Intern?",
      name = "job",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name?', 
      
  },
  {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID.",
      
  },
  {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      
  },
  {
    type: 'input',
    name: 'account',
    message: 'What is your Engineers GitHub account?'
  }
  // make conditionals to fork questions towards either Engineer or Intern properties
  // create file system that generates HTML file using data from prompt inputs






  ])


















}


  