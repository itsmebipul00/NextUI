// NAVIGATION

const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
const headingTitle = document.querySelector(".header-title")

navToggle.addEventListener("click", () => {
  console.log("object")
  const visiblity = nav.getAttribute("data-visible")
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
    headingTitle.style.color = "white"
  } else {
    nav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
    headingTitle.style.color = "black"
  }
})
