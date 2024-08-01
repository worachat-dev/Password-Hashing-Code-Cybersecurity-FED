// Simulated database with hashed passwords (for demonstration)
const database = {
    "clcoding": "ba1f2511fc30423bdbb183fe33f3dd0f",
    "pythonclcoding": "e99a18c428cb38d5f260853678922e03"
};

// Dummy hash function (MD5 for demonstration only)
function md5(string) {
    // Use a real hashing library in production (e.g., SHA-256 with salt)
    return CryptoJS.MD5(string).toString();
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const hashedPassword = md5(password);

    if (username in database) {
        if (database[username] === hashedPassword) {
            document.getElementById("message").innerText = "Verified";
            document.getElementById("message").style.color = "green";
        } else {
            document.getElementById("message").innerText = "Invalid password. Please try again.";
            document.getElementById("message").style.color = "red";
        }
    } else {
        document.getElementById("message").innerText = "Username not found.";
        document.getElementById("message").style.color = "red";
    }
});

