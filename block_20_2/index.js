import './index.css'

let localStor = localStorage.getItem('tempCookie')
localStor = JSON.parse(localStor)
const windowCookie = document.querySelector('.cookie-consent')
const myButton = document.querySelector('.cookie-consent__button')

if (localStor) {
  windowCookie.classList.add('hide')
} else {
  windowCookie.classList.remove('hide')
}

myButton.addEventListener('click', () => {
  localStorage.setItem('tempCookie', JSON.stringify(1))
  windowCookie.classList.add('hide')
})
