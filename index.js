// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },

    {
        type: "input",
        name: "installation",
        message: "How is the project installed?",
    },
    
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?",
    },

    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors on the project?",
    },

    {
        type: "input",
        name: "tests",
        message: "How is the project tested?",
    },

    {
        type: "list",
        name: "license",
        message: "Which license does your project use?",
        choices: ["AGPL v3", "MPL-2.0", "Apache-2.0", "MIT", "None"]
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log ("Written")
        }
    })
}
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("./dist/README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();