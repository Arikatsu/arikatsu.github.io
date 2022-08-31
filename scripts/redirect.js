let clickNumbers = 0;
const __pfp = document.getElementsByClassName("pfp-container")[0];

__pfp.addEventListener("click", () => {
    clicks++;
    if (clicks === 3) {
        window.location.replace("https://images.arikatsu.lol/");
        clicks = 0;
    }
});