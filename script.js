// Get references to the HTML elements
const htmlCodeInput = document.getElementById("html-code");
const cssCodeInput = document.getElementById("css-code");
const jsCodeInput = document.getElementById("js-code");
const outputFrame = document.getElementById("output");

// Load code from local storage on page load
window.addEventListener("DOMContentLoaded", loadCodeFromLocalStorage);

// Save code to local storage when a key is released in any of the code inputs
htmlCodeInput.addEventListener("input", saveCodeToLocalStorage);
cssCodeInput.addEventListener("input", saveCodeToLocalStorage);
jsCodeInput.addEventListener("input", saveCodeToLocalStorage);

// Function to load code from local storage
function loadCodeFromLocalStorage() {
  htmlCodeInput.value = localStorage.getItem("htmlCode") || "";
  cssCodeInput.value = localStorage.getItem("cssCode") || "";
  jsCodeInput.value = localStorage.getItem("jsCode") || "";
  run(); // Run the code after loading
}

// Function to save code to local storage
function saveCodeToLocalStorage() {
  const htmlCode = htmlCodeInput.value;
  const cssCode = cssCodeInput.value;
  const jsCode = jsCodeInput.value;

  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCode);
  localStorage.setItem("jsCode", jsCode);

  run(); // Run the code after saving
}

// Function to run the code
function run() {
  const htmlCode = htmlCodeInput.value;
  const cssCode = cssCodeInput.value;
  const jsCode = jsCodeInput.value;

  outputFrame.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";
  outputFrame.contentWindow.eval(jsCode);
}
