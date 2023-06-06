// Import inquirer module
const inquirer = require('inquirer');

// Creates a function for promptText which handles the text input
function promptText() {
    // inquirer prompt method to display a prompt to user and waits for their resonse
    return inquirer
      .prompt([
        {
            // Specifies the prompt for the user
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: function (input) {
            // Validate that the input is up to three characters
            if (input.length < 3) {
              return 'Please enter up to three characters.';
            }
            return true;
          },
        },
      ])
      // Once promise is returned passes the response from user and logs the text
      .then((response) => {
        const text = response.text;
        console.log('Entered text:', text);
      });
  }
  
  // Runs promptText function
  promptText();
