import { getRandomColor } from './utils'

export default function initApp() {
  console.log('Hello world')

  const myButton = document.createElement('button')
  myButton.className = 'button'
  myButton.textContent = 'Изменить цвет страницы'
  document.body.append(myButton)

  const button = document.querySelector('.button')
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor()
  })
}
