let __clicks = 0;
const __pfp = document.getElementsByClassName("pfp-container")[0];

__pfp.addEventListener("click", () => {
    __clicks++;
    if (__clicks === 3) {
        window.location.replace("https://images.arikatsu.lol/");
        __clicks = 0;
    }
});