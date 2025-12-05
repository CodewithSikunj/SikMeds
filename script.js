const toggleBtn = document.getElementById("theme-toggle");

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.addEventListener("darkMode", "enabled");
    } else {
        localStorage.addEventListener("darkMode", "disabled");
    }
});
