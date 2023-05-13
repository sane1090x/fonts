const mq = window.matchMedia("(prefers-color-scheme: dark)");
const img = document.querySelector(".container img");

function updateImageSource() {
  if (mq.matches) {
    img.src = "img/dark/scr-dark.png";
  } else {
    img.src = "img/light/scr.png";
  }
}

updateImageSource(); // call initially to set the correct image source

mq.addEventListener("change", updateImageSource);
