const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("loginError");

if (loginForm) {
    const USER = {
        username: "admin",
        password: "1234"
    };

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === USER.username && password === USER.password) {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "index.html";
        } else {
            errorText.textContent = "Feil brukernavn eller passord";
        }
    });
}