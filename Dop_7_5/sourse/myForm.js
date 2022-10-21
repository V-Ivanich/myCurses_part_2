export class FormRender {
  #form
  constructor(text) {
    this.#form = document.createElement('form')
    this.#form.className = 'donate-form'
    this.text = text
  }
  render() {
    const myTitleForm = document.createElement('h1')
    myTitleForm.id = 'total-amount'
    myTitleForm.textContent = this.text

    const inputLabel = document.createElement('label')
    inputLabel.className = 'donate-form__input-label'
    inputLabel.textContent = 'Введите сумму в $'

    const inputDonate = document.createElement('input')
    inputDonate.className = 'donate-form__donate-input'
    inputDonate.name = 'amount'
    inputDonate.type = 'number'
    inputDonate.max = '100'
    inputDonate.min = '1'
    inputDonate.setAttribute('required', '')

    const buttonSubmit = document.createElement('button')
    buttonSubmit.className = 'donate-form__submit-button'
    buttonSubmit.type = 'submit'
    buttonSubmit.textContent = 'Задонатить'

    this.#form.append(myTitleForm, inputLabel, buttonSubmit)
    inputLabel.append(inputDonate)

    return this.#form
  }

  setTotalDonate(text) {
    this.text = text
    document.querySelector('#total-amount').textContent = `${text}$`
  }
}
