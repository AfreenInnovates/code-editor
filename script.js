// Get references to the HTML elements
const htmlCodeInput = document.getElementById("html-code"); // Get the HTML input element with the ID "html-code"
const cssCodeInput = document.getElementById("css-code"); // Get the HTML input element with the ID "css-code"
const jsCodeInput = document.getElementById("js-code"); // Get the HTML input element with the ID "js-code"
const outputFrame = document.getElementById("output"); // Get the HTML iframe element with the ID "output"

// Load code from local storage on page load
window.addEventListener("DOMContentLoaded", loadCodeFromLocalStorage); // Listen for the "DOMContentLoaded" event and call the function loadCodeFromLocalStorage

// Save code to local storage when a key is released in any of the code inputs
htmlCodeInput.addEventListener("input", saveCodeToLocalStorage); // Listen for the "input" event on the HTML input element for HTML code and call the function saveCodeToLocalStorage
cssCodeInput.addEventListener("input", saveCodeToLocalStorage); // Listen for the "input" event on the HTML input element for CSS code and call the function saveCodeToLocalStorage
jsCodeInput.addEventListener("input", saveCodeToLocalStorage); // Listen for the "input" event on the HTML input element for JavaScript code and call the function saveCodeToLocalStorage

// Function to load code from local storage
function loadCodeFromLocalStorage() {
  htmlCodeInput.value = localStorage.getItem("htmlCode") || ""; // Set the value of the HTML input element for HTML code to the value stored in local storage with key "htmlCode", or set it to an empty string if the value is not found
  cssCodeInput.value = localStorage.getItem("cssCode") || ""; // Set the value of the HTML input element for CSS code to the value stored in local storage with key "cssCode", or set it to an empty string if the value is not found
  jsCodeInput.value = localStorage.getItem("jsCode") || ""; // Set the value of the HTML input element for JavaScript code to the value stored in local storage with key "jsCode", or set it to an empty string if the value is not found
  run(); // Run the code after loading
}

// Function to save code to local storage
function saveCodeToLocalStorage() {
  const htmlCode = htmlCodeInput.value; // Get the current value of the HTML input element for HTML code
  const cssCode = cssCodeInput.value; // Get the current value of the HTML input element for CSS code
  const jsCode = jsCodeInput.value; // Get the current value of the HTML input element for JavaScript code

  localStorage.setItem("htmlCode", htmlCode); // Store the HTML code value in local storage with key "htmlCode"
  localStorage.setItem("cssCode", cssCode); // Store the CSS code value in local storage with key "cssCode"
  localStorage.setItem("jsCode", jsCode); // Store the JavaScript code value in local storage with key "jsCode"

  run(); // Run the code after saving
}

// Function to run the code
function run() {
  const htmlCode = htmlCodeInput.value; // Get the current value of the HTML input element for HTML code
  const cssCode = cssCodeInput.value; // Get the current value of the HTML input element for CSS code
  const jsCode = jsCodeInput.value; // Get the current value of the HTML input element for JavaScript code

  outputFrame.contentDocument.body.innerHTML = // Set the HTML content of the iframe's body to the combined HTML and CSS code
    htmlCode + "<style>" + cssCode + "</style>";
  outputFrame.contentWindow.eval(jsCode); // Evaluate and execute the JavaScript code within the outputFrame
}

