// Get the "prefers-color-scheme" media query
const mq = window.matchMedia("(prefers-color-scheme: dark)");

// Get the first <img> element inside a <div> element with class "container"
const img = document.querySelector(".container img");

// Function that updates the image source based on the color scheme preference
function updateImageSource() {
  // If the media query matches the user's preference
  if (mq.matches) {
    // Set the source of the image to the dark version
    img.src = "img/dark/scr-dark.png";
  } else {
    // Otherwise, set the source of the image to the light version
    img.src = "img/light/scr.png";
  }
}

// Call the function initially to set the correct image source based on the user's preference
updateImageSource();

// Listen for changes to the media query and update the image source accordingly
mq.addEventListener("change", updateImageSource);
