const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter Three Characters',
        validate: (input) => input.length <= 3,
      },
    {
      type: 'list',
      message: 'Please choose a text color',
      name: 'textColor',
      choices: ['black', 'white', 'yellow'],
    },
    {
        type: 'list',
        message: 'Please a shape',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
      },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Please choose a shape color',
      choices: ['green', 'red', 'yellow']
    },
  ])
  // TODO: Create a function to write README file
  .then((response) => {
    console.log(response) // sanity check
    const fakeMd = generateMarkdown(response)
    fs.writeFile('README.md', fakeMd, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  });

function writeToFile(fileName, data) { }


function init() { }

// Function call to initialize app
init();

_____________________________________________

.then((answers) => {
    let shape;
    const text = {
      _attributes: {
        x: canvasWidth / 2,
        y: canvasHeight / 1.35, 
        'text-anchor': 'middle',
        fill: answers.textColor,
      },
    }
  
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });