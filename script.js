const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const music = document.getElementById("music");

startButton.addEventListener("click", () => {
    welcome.style.display = "none";
    main.classList.remove("hidden");

    // Start the music
    music.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
    });
});

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "floatHeart 6s linear forwards";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);

// Animation CSS
const style = document.createElement("style");

style.innerHTML = `
@keyframes floatHeart{
0%{
transform:translateY(0) scale(1);
opacity:1;
}
100%{
transform:translateY(-110vh) scale(1.6);
opacity:0;
}
}
`;

document.head.appendChild(style);
