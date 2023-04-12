const darkModeBtn = document.getElementById("dark-mode-btn");
const header = document.querySelector('.header');

darkModeBtn.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme

    // Switch light/dark theme
    if (theme === 'light') {
        document.documentElement.dataset.theme = 'dark'
    } else {
        document.documentElement.dataset.theme = 'light'
    }

    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode") ? "Light mode" : "Dark mode";
});
