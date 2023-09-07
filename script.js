const comingSoonText = document.getElementById('coming-soon');
let currentText = "Coming";
const finalText = "Coming Soon...";
let index = currentText.length;

function typeText() {
    if (index < finalText.length) {
        currentText += finalText.charAt(index);
        comingSoonText.textContent = currentText;
        index++;
        setTimeout(typeText, 500);
    } else {
        setTimeout(flickerDot, 5000);
    }
}

function flickerDot() {
    if (comingSoonText.textContent === "Coming Soon.") {
        comingSoonText.textContent = "Coming Soon";
        setTimeout(() => {
            comingSoonText.textContent = "Coming Soon.";
            setTimeout(() => {
                resetAnimation();
            }, 1000);
        }, 1000);
    } else {
        comingSoonText.textContent = "Coming Soon.";
        setTimeout(flickerDot, 1000);
    }
}

function resetAnimation() {
    setTimeout(() => {
        currentText = "Coming";
        index = currentText.length;
        comingSoonText.textContent = currentText;
        typeText();
    }, 5000);
}

// Initial start
typeText();

// Prepare the logo for future clicks
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    alert("Stay tuned! More features coming soon.");
});
