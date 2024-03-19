
document.getElementById("loginBtn").addEventListener("click", function() {
    var email = document.getElementById("staticEmail").value;
    var password = document.getElementById("inputPassword").value;
    console.log("Email:", email);
    console.log("Password:", password);
});

function cancelar() {
    window.location.href = "index.html"
}
function validateForm() {
    var email = document.getElementById("inputEmail4").value;
    var password = document.getElementById("inputPassword4").value;
    var address = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var state = document.getElementById("inputState").value;
    var zip = document.getElementById("inputZip").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    if (address.trim() === "") {
        alert("Por favor, introduce una dirección válida.");
        return false;
    }
    if (city.trim() === "") {
        alert("Por favor, introduce una ciudad válida.");
        return false;
    }
    if (state === "Choose...") {
        alert("Por favor, selecciona un estado.");
        return false;
    }
    if (!zipRegex.test(zip)) {
        alert("Por favor, introduce un código postal válido.");
        return false;
    }

    alert("Información ingresada:\n\nEmail: " + email + "\nContraseña: " + password + "\nDirección: " + address + "\nCiudad: " + city + "\nEstado: " + state + "\nCódigo Postal: " + zip);
    return true;
}



