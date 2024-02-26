function generateQR() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let createAnotherBtn = document.getElementById("createAnotherBtn"); 

    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        let generateBtn = document.getElementById("generateBtn");
    generateBtn.style.display = "none"; // Hide the "Generate QR code" button
        createAnotherBtn.style.display = "block"; // Display the "Create Another QR Code" button
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
   
}

function CreateAnother() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let generateBtn = document.getElementById("generateBtn");
    let createAnotherBtn = document.getElementById("createAnotherBtn");

    qrText.value = ""; // Clear the input field
    qrImage.src = ""; // Clear the image source
    imgBox.classList.remove("show-img"); // Hide the image box
    createAnotherBtn.style.display = "none"; // Hide the "Create Another QR Code" button
    generateBtn.style.display = "block"; // Show the "Generate QR code" button
}