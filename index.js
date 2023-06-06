// Import inquirer module
const inquirer = require('inquirer');
// Import fs module
const fs = require('fs');
// Import svgCaptcha module
const svgCaptcha = require('svg-captcha');

// Creates a function for promptText which handles the text input
function promptText() {
    // inquirer prompt method to display a prompt to user and waits for their resonse
    return inquirer
      .prompt([
        {
            // Enter characters prompt
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: function (input) {
            // Validate that the input is up to three characters
            if (input.length > 3) {
              return 'Please enter up to three characters.';
            }
            return true;
          },
        },
        {
            // Enter text color prompt
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal number):'
        },
        {
            // Enter shape prompt
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            // Enter shape color prompt
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal number):'
        }
      ])
      // Once promise is returned passes the response from user and logs the text
      .then((response) => {
        const text = response.text;
        const textColor = response.textColor;
        const shape = response.shape;
        const shapeColor = response.shapeColor
        console.log('Entered text:', text);
        console.log('Entered text color:', textColor);
        console.log('Selected shape:', shape);
        console.log('Entered shape color:', shapeColor);

        // Generate the logo and save it to a file
        const captcha = svgCaptcha.create(text, { size: { width: 300, height: 200 } });
        fs.writeFileSync('logo.svg', captcha.data);
        console.log('Generated logo.svg');
      });
  }
  
  // Runs promptText function
  promptText();
