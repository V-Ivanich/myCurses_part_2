import './index.css'
import { App } from './sourse/app'
import { getToday } from './utils/getTime'
import { basearray } from './utils/baseArray'

const runAll = new App()
runAll.run()

const clickForm = document.querySelector('form')
const conteiner = document.querySelector('.donates-container__donates')
const donateInInput = document.querySelector('.donate-form__donate-input')
clickForm.addEventListener('submit', event => {
  event.preventDefault()
  const getDateToDay = getToday(new Date())
  const newDataBase = [getDateToDay, Number(donateInInput.value)]
  donateInInput.value = ''
  basearray.push(newDataBase)

  runAll.setDonate(newDataBase, conteiner, totalDonates())
})

function totalDonates() {
  let coint = 0
  basearray.forEach(elem => {
    coint += elem[1]
  })
  return coint
}
