let btn = document.querySelector(".btn");

function randNum() {
  return Math.floor(Math.random() * 700);
}



btn.addEventListener("mouseenter", () => {
    btn.style.margin = `${randNum()}px ${randNum()}px ${randNum()}px ${randNum()}px`
})


