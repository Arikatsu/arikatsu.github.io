let clicks = 0;
const pfp = document.getElementsByClassName("pfp-container")[0];

pfp.addEventListener("click", () => {
    clicks++;
    if (clicks === 3) {
        window.location.replace("https://images.arikatsu.lol/");
        clicks = 0;
    }
});