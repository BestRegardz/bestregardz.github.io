const comingSoonText = document.getElementById('coming-soon');
let currentText = "Coming";
let finalText = "Coming Soon...";
let index = currentText.length;

function typeText() {
    if (index < finalText.length) {
        currentText += finalText.charAt(index);
        comingSoonText.textContent = currentText;
        index++;
        if (index === finalText.length) {
            setTimeout(() => {
                flickerDot();
                setTimeout(typeText, 5000);
            }, 1000);
        }
    } else {
        comingSoonText.textContent = "Coming Soon";
        index = "Coming".length;
    }
}

function flickerDot() {
    if (comingSoonText.textContent === "Coming Soon.") {
        comingSoonText.textContent = "Coming Soon";
    } else {
        comingSoonText.textContent = "Coming Soon.";
    }
    setTimeout(flickerDot, 1000);
}

const typing = setInterval(typeText, 200);

// Prepare the logo for future clicks
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    alert("Stay tuned! More features coming soon.");
});
