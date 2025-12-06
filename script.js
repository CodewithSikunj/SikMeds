const Btn = document.getElementById("theme-toggle");


if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

Btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.addEventListener("darkMode", "enabled");
    } else {
        localStorage.addEventListener("darkMode", "disabled");
    }
});
