const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});

// load waits for all resources to load before running the function.
// DOMContentLoaded only waits for html to load without waiting for stylesheets and other resources.
