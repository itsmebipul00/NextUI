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

// CARDS
const closeVIcon = document.querySelector(".close-icon-verticle")
const closeHIcon = document.querySelector(".close-icon-horizontal")
const closeHCard = document.querySelector(".card-dismiss-horizontal")
const closeVCard = document.querySelector(".card-dismiss-verticle")

closeHIcon.addEventListener("click", () => {
  closeHCard.style.display = "none"
})
closeVIcon.addEventListener("click", () => {
  closeVCard.style.display = "none"
})

const tabHorizontal = document.querySelector(".tab-horizontal")
const tabVerticle = document.querySelector(".tab-verticle")
const cardsHorizontal = document.querySelector(".cards-horizontal-autofit")
const cardsVerticle = document.querySelector(".cards-verticle-autofit")
const codeVerticle = document.querySelector(".code-verticle")
const codeHorizontal = document.querySelector(".code-horizontal")

tabHorizontal.addEventListener("click", () => {
  tabVerticle.setAttribute("data-visible", false)
  tabHorizontal.setAttribute("data-visible", true)
  cardsVerticle.setAttribute("data-visible", false)
  cardsHorizontal.setAttribute("data-visible", true)
  codeVerticle.setAttribute("data-visible", false)
  codeHorizontal.setAttribute("data-visible", true)
})

tabVerticle.addEventListener("click", () => {
  tabHorizontal.setAttribute("data-visible", false)
  tabVerticle.setAttribute("data-visible", true)
  cardsHorizontal.setAttribute("data-visible", false)
  cardsVerticle.setAttribute("data-visible", true)
  codeHorizontal.setAttribute("data-visible", false)
  codeVerticle.setAttribute("data-visible", true)
})
