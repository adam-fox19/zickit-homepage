// nav toggle js
const show_nav_overlay = () => {
  document.querySelector(".header__nav").classList.add("open");
  document.querySelector("#header__nav-toggle-open").style.display = 'none';
  document.querySelector("#header__nav-toggle-close").style.display = 'block';
}
const hide_nav_overlay = () => {
  document.querySelector(".header__nav").classList.remove("open");
  document.querySelector("#header__nav-toggle-open").style.display = 'block';
  document.querySelector("#header__nav-toggle-close").style.display = 'none';
}

document.querySelector(".header__nav-toggle-wrapper").addEventListener("click", (event) => {
  if (!document.querySelector(".header__nav").classList.contains("open")) {
    show_nav_overlay();
  } else {
    event.target.style.display = 'block';
    hide_nav_overlay();
  }
});

// hides nav overlay if window resized by user
window.addEventListener("resize", () => {
  if (window.innerWidth > 767 && document.querySelector(".header__nav").classList.contains("open")) {
    hide_nav_overlay();
  }
});
