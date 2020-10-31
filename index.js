//1. fs
//2. npm install inquirer :node-module and pkg-lock json created 6.5.2
//3. npm install -reads p-lock, downloads dependencies from npm=>in node-modules
//4. echo node_modules/ > .gitignore to add //git status
//5. .DS_Store/ to gitignore
//6. questions from instructions added

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


//const fs = require('fs');
const inquirer = require('inquirer');
//link to generateMarkdown page:
const generateMarkdown = require('./utils/generateMarkdown'); // where module.export is

const { writeFile, copyFile } = require('./output/Readme.md');


// array of questions for user
const promptUser = () => {
    return inquirer.prompt(
        [
            // WHEN I enter my GitHub username
            // THEN this is added to the section of the README entitled 
            //Questions, with a link to my GitHub profile
            {
                type: "input",
                name: "github",
                message: "What is your github username? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your github username!');
                        return false;
                    }
                }

            },
            // WHEN I enter my email address
            // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with 
            //additional questions
            {
                type: "input",
                name: "email",
                message: "What is your email? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAbout',
                message: 'Would you like to enter some information about yourself for an "About" section?',
                default: true
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:',
                when: ({ confirmAbout }) => confirmAbout
            }
        ]);
};

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// {},

// WHEN I enter my project title
// THEN this is displayed as the title of the README
const promptProject = portfolioData => {
    console.log(`
  ===========================
  Add info to Readme Project
  ===========================
  `);

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is your GitHub title? (Required)",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please enter your Github title!');
                        return false;
                    }
                }
            },
            // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
            // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
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
            // WHEN I choose a license for my application from a list of options
            // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

            {
                type: "checkbox",//"list", //list of options?
                name: "license",
                message: "Please choose from the list of licenses for your project: ",
                choices: ['MIT', 'ISC', ' Apache License 2.0', 'GNU GPLv3', 'NONE']
            },
            {
                type: "confirm",
                name: "confirmFinishReadme",
                message: "Please confirm the finish of your project",
                default: true
            }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmFinishReadme) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generateMarkdown(portfolioData);
    })
    .then(Readme => {
        return writeFile(Readme);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

//generateMarkdown()

// // function to write README file
// function writeToFile(fileName, data) {
//     return fs.fileName(data)
//     //     const pageReadme = generatePage(portfolioData);
//     //     fs.writeFile('./output/Readme.md', pageReadme, err => {
//     //         if (err) throw new Error(err);
//     //         console.log('Page created! Check out readme.md in this directory to see it!');
//     //     });
// };

// // function to initialize program
// function init() {
//     inquirer.prompt(questions)
//         .then(responses => {
//             let markdown = generateMarkdown(responses)
//         })
// }
// // function call to initialize program
// init();

// // console.log(inquirer)

// .gitignore:
// node_modules
// package - lock.json
//   .vscode
//   .DS_Store


