// Get references to HTML elements
const display = document.getElementById('calculator-display');
const buttons = document.querySelectorAll('.calculator-button');

// Initialize input
let input = '';

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    
    if (buttonText === '=') {
      try {
        // Use Function constructor instead of eval for safety
        input = Function('"use strict"; return (' + input + ')')();
        display.value = input;
      } catch (error) {
        display.value = 'Error';
        input = ''; // Reset input on error
      }
    } else if (buttonText === 'AC') {
      input = '';
      display.value = '';
    } else {
      input += buttonText;
      display.value = input;
    }
  });
});
