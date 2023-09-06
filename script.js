const comingSoonText = document.getElementById('coming-soon');
let currentText = "Coming";
let finalText = "Coming Soon...";

let index = currentText.length;

function typeText() {
    if (index < finalText.length) {
        currentText += finalText.charAt(index);
        comingSoonText.textContent = currentText;
        index++;
    } else {
        clearInterval(typing);
    }
}

const typing = setInterval(typeText, 200);

// Prepare the logo for future clicks
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    alert("Stay tuned! More features coming soon.");
});
