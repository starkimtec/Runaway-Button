let btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
    let maxX = window.innerWidth - btn.offsetWidth;
    let maxY = window.innerHeight - btn.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});