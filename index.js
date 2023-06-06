// Import inquirer module
const inquirer = require('inquirer');
// Import fs module
const fs = require('fs');

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

        // Generate the custom logo SVG code
        let svgContent = '';

        // Generate the SVG code based on the user-provided inputs
      if (shape === 'circle') {
        svgContent = `<circle cx="300" cy="200" r="100" fill="${shapeColor}" />`;
      } else if (shape === 'triangle') {
        svgContent = `<polygon points="300,25 150,360 450,360" fill="${shapeColor}" />`;
      } else if (shape === 'square') {
        svgContent = `<rect x="150" y="100" width="300" height="200" fill="${shapeColor}" />`;
      }

      // Adjust the font size of the text
      const fontSize = 48;

      // Add the text to the SVG code
      svgContent += `<text x="300" y="200" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="${fontSize}">${text}</text>`;

      // Wrap the SVG code in an <svg> element
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">${svgContent}</svg>`;

      // Save the custom logo SVG code to the logo.svg file
      fs.writeFileSync('logo.svg', svg);
      console.log('Generated logo.svg');
      });
  }
  
  // Runs promptText function
  promptText();
