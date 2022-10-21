import { basearray } from '../utils/baseArray'

export class RenderPrice {
  #container

  constructor() {
    this.base = basearray
    this.#container = document.createElement('div')
    this.#container.className = 'donates-container'
  }

  renderItem() {
    const titleContainer = document.createElement('h2')
    titleContainer.className = 'donates-container__title'
    titleContainer.textContent = 'Список донатов'

    const donatContainer = document.createElement('div')
    donatContainer.className = 'donates-container__donates'

    this.#container.append(titleContainer, donatContainer)

    if (this.base.length !== 0) {
      this.base.forEach(elem => {
        this.setListDonate(elem, donatContainer)
      })
    }
    return this.#container
  }

  setListDonate(elem, container) {
    const itemDonate = document.createElement('div')
    itemDonate.className = 'donate-item'
    itemDonate.innerHTML = `${elem[0]} - <b>${elem[1]}$</b>`
    container.append(itemDonate)
  }
}
