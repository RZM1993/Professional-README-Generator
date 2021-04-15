const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "Dogs Name",
            message: "What dog breed?"
          },
          {
            type: "input",
            name: "description",
            message: "Briefly describe your dog/dogs?"
          },
          {
            type: "input",
            name: "Age of dog",
            message: "How old is your dog?"
          },
          {
            type: "input",
            name: "Food",
            message: "What food does your dog eat?"
          },
          {
            type: "input",
            name: "Grooming",
            message: "How many times if any do you groom your dog?"
          },
          {
            type: "input",
            name: "email",
            message: "Enter your email account"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username"
          }
        ]);
      }

function generateREADME(answers) {
  return `# ${answers.project_title}
    
## Project Description
* ${answers.description}
## Installation Instructions
* ${answers.install}
## Usage Information
* ${answers.use}
## Contributor Guidelines
* ${answers.contributions}
## Code of Conduct
* [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
## Test Instructions
* ${answers.test}
## License
* licensed under the ${answers.license}
## Questions
* For additional help or questions about collaboration, please reach out to ${answers.email}
* Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
  
}

promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);

 
    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log(" README.md has been created!");
  })
  .catch(function(err) {
    console.log(err);
  });