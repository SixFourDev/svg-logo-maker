// Import inquirer module
const inquirer = require('inquirer');

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
      ])
      // Once promise is returned passes the response from user and logs the text
      .then((response) => {
        const text = response.text;
        const textColor = response.textColor;
        console.log('Entered text:', text);
        console.log('Entered text color:', textColor);
      });
  }
  
  // Runs promptText function
  promptText();
