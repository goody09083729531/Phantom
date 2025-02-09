document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "correctpassword") {
        alert("Wallet Unlocked!");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Wallet Unlocked.";
    }
});