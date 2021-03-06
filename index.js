const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const { writeFile } = require('./write-file');

const promptResponse = data => {
    console.log(`
  ====================
  Responses in Readme 
  ====================
  `);
    if (!data) {
        data = [];
    }

    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your GitHub Project title? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Project title!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide description about GitHub project.(Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions for your project. ",
            default: "npm install"
        },
        {
            type: "checkbox",
            name: "languages",
            message: "Please choose which technologies were used to create the code. ",
            choices: ['CSS', 'HTML', 'Node', 'JavaScript']
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide information on how to use your application. "
        },
        {
            type: "input",
            name: "contribution",
            message: " Please provide contribution guidelines for the application. "
        },
        {
            type: "input",
            name: "test",
            message: "Please provide instructions on how to test the application. ",
            default: "npm test"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please choose from the list of licenses for your project: ",
            choices: ['MIT', 'ISC', ' Apache License 2.0', 'GNU GPLv3', 'NONE']
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ])
};
promptResponse()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(pageReadme => {
        return writeFile(pageReadme);
    })
    .then(writeFileData => {
        console.log(writeFileData)
        return;
    })
    .catch(err => {
        console.log(err);
    });