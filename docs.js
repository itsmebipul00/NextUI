// Header title gradient interval
const flashText = () => {
	const hTitle = document.getElementById('header-title')
	if (hTitle.className === 'header-gradient') {
		hTitle.className = 'header-gradient-reverse'
	} else {
		hTitle.className = 'header-gradient'
	}
}
setInterval(flashText, 250)

// NAVIGATION
const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
const headingTitle = document.querySelector('.header-title')

function navToggle() {
	const navVisiblity = nav.getAttribute('data-visible')
	if (navVisiblity === 'false') {
		nav.setAttribute('data-visible', true)
		navToggle.setAttribute('aria-expanded', true)
		headingTitle.style.color = 'white'
	} else {
		nav.setAttribute('data-visible', false)
		navToggle.setAttribute('aria-expanded', false)
		headingTitle.style.color = 'black'
	}
}

navToggle.addEventListener('click', navToggle)

// ALERTS
const alertError = document.querySelector('.error-alert')
const closeError = document.querySelector('.closeError')
const alertWarning = document.querySelector('.warning-alert')
const closeWarning = document.querySelector('.closeWarning')
const alertInfo = document.querySelector('.info-alert')
const closeInfo = document.querySelector('.closeInfo')
const alertSuccess = document.querySelector('.success-alert')
const closeSuccess = document.querySelector('.closeSuccess')

const hideError = () => {
	alertError.style.display = 'none'
}

const hideWarning = () => {
	alertWarning.style.display = 'none'
}

const hideInfo = () => {
	alertInfo.style.display = 'none'
}
const hideSuccess = () => {
	alertSuccess.style.display = 'none'
}
closeError.addEventListener('click', hideError)
closeWarning.addEventListener('click', hideWarning)
closeInfo.addEventListener('click', hideInfo)
closeSuccess.addEventListener('click', hideSuccess)

// CARDS
const closeVIcon = document.querySelector('.close-icon-verticle')
const closeHIcon = document.querySelector('.close-icon-horizontal')
const closeHCard = document.querySelector('.card-dismiss-horizontal')
const closeVCard = document.querySelector('.card-dismiss-verticle')

closeHIcon.addEventListener('click', () => {
	closeHCard.style.display = 'none'
})
closeVIcon.addEventListener('click', () => {
	closeVCard.style.display = 'none'
})

const tabHorizontal = document.querySelector('.tab-horizontal')
const tabVerticle = document.querySelector('.tab-verticle')
const cardsHorizontal = document.querySelector('.cards-horizontal')
const cardsVerticle = document.querySelector('.cards-verticle')
const codeVerticle = document.querySelector('.code-cards-verticle')
const codeHorizontal = document.querySelector(
	'.code-cards-horizontal'
)

tabHorizontal.addEventListener('click', () => {
	tabVerticle.setAttribute('data-visible', false)
	tabHorizontal.setAttribute('data-visible', true)
	cardsVerticle.setAttribute('data-visible', false)
	cardsHorizontal.setAttribute('data-visible', true)
	codeVerticle.setAttribute('data-visible', false)
	codeHorizontal.setAttribute('data-visible', true)
})

tabVerticle.addEventListener('click', () => {
	tabHorizontal.setAttribute('data-visible', false)
	tabVerticle.setAttribute('data-visible', true)
	cardsHorizontal.setAttribute('data-visible', false)
	cardsVerticle.setAttribute('data-visible', true)
	codeHorizontal.setAttribute('data-visible', false)
	codeVerticle.setAttribute('data-visible', true)
})

// BUTTONS

const floatButtons = document.querySelector('.float-buttons')
const btnFloatCta = document.querySelector('.btn-float-cta')

btnFloatCta.addEventListener('click', () => {
	// console.log("first")
	const floatBtnVisiblity = floatButtons.getAttribute('data-visible')
	console.log(floatBtnVisiblity)
	if (floatBtnVisiblity === 'false') {
		floatButtons.setAttribute('data-visible', true)
		btnFloatCta.setAttribute('aria-expanded', true)
	} else {
		floatButtons.setAttribute('data-visible', false)
		btnFloatCta.setAttribute('aria-expanded', false)
	}
})

// FORM

const password = document.querySelector('.form-password')
const reenterpassword = document.querySelector(
	'.form-reenter-password'
)
const confirmPassword = document.querySelector('.confirm-password')
const small = document.createElement('small')
const btn = document.querySelector('.btn')

reenterpassword.addEventListener('keyup', e => {
	small.innerText = ''
	btn.disabled = false
	if (password.value !== e.target.value) {
		small.innerText = 'Passwords do not match'
		confirmPassword.appendChild(small)
		btn.disabled = true
	} else {
		small.innerText = ''
		btn.disabled = false
	}
})

// LIST

const normalList = document.querySelector('.list-subtitle-normal')
const stackedList = document.querySelector('.list-subtitle-stacked')
const listNormal = document.querySelector('.list-normal')
const listStacked = document.querySelector('.list-stacked')

normalList.addEventListener('click', () => {
	stackedList.setAttribute('data-visible', false)
	listStacked.setAttribute('data-visible', false)
	listStacked.setAttribute('aria-hidden', true)
	normalList.setAttribute('data-visible', true)
	listNormal.setAttribute('data-visible', true)
	listNormal.setAttribute('aria-hidden', false)
})

stackedList.addEventListener('click', () => {
	normalList.setAttribute('data-visible', false)
	listNormal.setAttribute('data-visible', false)
	listNormal.setAttribute('aria-hidden', true)
	stackedList.setAttribute('data-visible', true)
	listStacked.setAttribute('data-visible', true)
	listStacked.setAttribute('aria-hidden', false)
})

// STACKED LIST

const showMore = document.querySelector('.stackList-item-more')
const listItem4 = document.querySelector('.stackList-item-4')
const listItem5 = document.querySelector('.stackList-item-5')

showMore.addEventListener('click', () => {
	const listOneVisibility = showMore.getAttribute('data-visible')
	if (listOneVisibility === 'false') {
		showMore.innerText = 'Show less'
		listItem4.setAttribute('data-visible', true)
		listItem5.setAttribute('data-visible', true)
		showMore.setAttribute('data-visible', true)
	} else {
		showMore.innerText = 'Show more'
		listItem4.setAttribute('data-visible', false)
		listItem5.setAttribute('data-visible', false)
		showMore.setAttribute('data-visible', false)
	}
})

// MODAL

const displayModal = document.querySelector('.modal-display')
const modal = document.querySelector('.modal-fixed')
const closeModal = document.querySelector('.fa-times-circle')

closeModal.addEventListener('click', () => {
	modal.setAttribute('data-visible', false)
})

displayModal.addEventListener('click', () => {
	const modalVisibility = modal.getAttribute('data-visible')
	if (modalVisibility === 'false') {
		modal.setAttribute('data-visible', true)
	} else {
		modal.setAttribute('data-visible', false)
	}
})

// TOAST

const btnToast = document.querySelector('.btn-toast')
const toastNotification = document.querySelector(
	'.toast-notification'
)

btnToast.addEventListener('click', () => {
	const toastVisibility =
		toastNotification.getAttribute('data-visible')
	if (toastVisibility === 'false') {
		toastNotification.setAttribute('data-visible', true)
		setTimeout(() => {
			toastNotification.setAttribute('data-visible', false)
		}, 2000)
	}
})

// SLIDER

const slider = document.querySelector('.slider')
const percentage = document.querySelector('.percentage')
percentage.innerHTML = `${slider.value}%`

slider.oninput = function () {
	const value = this.value
	percentage.innerHTML = `${value}%`
}

// Dark mode

let button = document.querySelector('.dark-mode-toggle')
let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode-toggle')

const enableDarkMode = () => {
	document.documentElement.classList.add('dark-mode')
	document.querySelectorAll('.original-theme').forEach(theme => {
		theme.classList.add('theme-original')
	})
	localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
	document.documentElement.classList.remove('dark-mode')
	document.querySelectorAll('.original-theme').forEach(theme => {
		theme.classList.remove('theme-original')
	})
	localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
	enableDarkMode()
}

button.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode')
	if (darkMode !== 'enabled') {
		enableDarkMode()
	} else {
		disableDarkMode()
	}
})
