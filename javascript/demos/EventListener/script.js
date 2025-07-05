// Function to display a greeting message
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, welcome to ABC Technologies!';
}

// Function to change the text of a paragraph
function changeText() {
    const textParagraph = document.getElementById('textParagraph');
    textParagraph.textContent = 'Text has been changed!';
}

// Event listener for the greet button
document.getElementById('greetButton').addEventListener('click', (displayGreeting));

// Event listener for the change text button
document.getElementById('changeTextButton').addEventListener('click', changeText);