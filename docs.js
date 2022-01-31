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

// ALERTS
const alertError = document.querySelector(".bg-error")
const closeError = document.querySelector(".closeError")
const alertWarning = document.querySelector(".bg-warning")
const closeWarning = document.querySelector(".closeWarning")
const alertInfo = document.querySelector(".bg-info")
const closeInfo = document.querySelector(".closeInfo")
const alertSuccess = document.querySelector(".bg-success")
const closeSuccess = document.querySelector(".closeSuccess")

const hideError = () => {
  alertError.style.display = "none"
}

const hideWarning = () => {
  alertWarning.style.display = "none"
}

const hideInfo = () => {
  alertInfo.style.display = "none"
}
const hideSuccess = () => {
  alertSuccess.style.display = "none"
}
closeError.addEventListener("click", hideError)
closeWarning.addEventListener("click", hideWarning)
closeInfo.addEventListener("click", hideInfo)
closeSuccess.addEventListener("click", hideSuccess)
