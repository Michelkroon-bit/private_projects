function addeffect(classstring){
    document.addEventListener('scroll', () => {
        const thingsAboutMe = document.querySelector(classstring);
        const rect = thingsAboutMe.getBoundingClientRect();
    
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            thingsAboutMe.classList.add('visible'); 
            thingsAboutMe.classList.remove('hidden');
        }
    });
}

addeffect('.about-me');
addeffect('.Contact-Me');
addeffect('.My-Projects');
addeffect('.Small-projects');
addeffect('.skills');
addeffect('.Things-i-want-to-learn');
addeffect('.My-Goal');

function generateQRCode() {
    let qrcodeDiv = document.getElementById("qrcode");

    if (!qrcodeDiv) {
        console.error("Het QR-code element is niet gevonden!");
        return;
    }

    let userURL = prompt("Voer een URL in voor je QR-code:");

    if (!userURL || userURL.trim() === "") {
        alert("Je moet een geldige URL invoeren!");
        return;
    }

    qrcodeDiv.innerHTML = ""; // Leegmaken
    new QRCode(qrcodeDiv, {
        text: userURL,
        width: 128,
        height: 128
    });
    setTimeout(() => {
        let qrCanvas = qrcodeDiv.querySelector("canvas");

        if (qrCanvas) {
            let qrImage = qrCanvas.toDataURL("image/png");
            downloadBtn.href = qrImage;
            downloadBtn.style.display = "inline-block";
            downloadBtn.innerText = "Download QR Code";
        }
    }, 500);
    alert("Your QR code has been generated");
}

document.getElementById("generateBtn").addEventListener("click", generateQRCode);