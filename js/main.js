// Login Validation
function validateLogin() {

    const username = document.getElementById("uname").value;
    const password = document.getElementById("pwd").value;

    if (username === "admin" && password === "password123") {

        window.location.href = "index.html";

    } else {

        console.log("Invalid credentials");

        document.querySelector(".modal").style.display = "block";
    }
}

// Hide Modal
function dismissModal() {

    document.querySelector(".modal").style.display = "none";
}

// Hide modal by default
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.querySelector(".modal");

    if (modal) {
        modal.style.display = "none";
    }
});

// Navigation Toggle
let navStatus = false;

function toggleNav() {

    const sidebar = document.querySelector(".nav-sidebar");
    const sidebarUl = document.querySelector(".nav-sidebar ul");

    if (!sidebar || !sidebarUl) {
        return;
    }

    if (navStatus === false) {

        sidebar.style.width = "250px";
        sidebarUl.style.visibility = "visible";

        navStatus = true;

    } else {

        sidebar.style.width = "50px";
        sidebarUl.style.visibility = "hidden";

        navStatus = false;
    }
}