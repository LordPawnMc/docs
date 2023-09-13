 document.addEventListener("DOMContentLoaded", function () {
            const loginForm = document.getElementById("loginForm");

            loginForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent the form from submitting normally

                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                // Check if the entered username and password match
                if (username === "Grade-10" && password === "ARROYO") {
                    // Redirect to the dashboard page
                    window.location.href = "lordpawnmc.github.io/group-2/index.html";
                } else {
                    // Display an error message (customize this)
                    alert("Login failed. Please try again.");
                }
            });
        });
