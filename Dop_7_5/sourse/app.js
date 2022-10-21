import { FormRender } from './myForm'
import { RenderPrice } from './render'

export class App {
  constructor() {
    this.formRender = new FormRender('28$')
    this.price = new RenderPrice()
  }
  run() {
    const formHTML = this.formRender.render()
    const priceHTML = this.price.renderItem()
    document.body.append(formHTML, priceHTML)
  }
  setDonate(elem, container, totalCase) {
    this.price.setListDonate(elem, container)
    this.formRender.setTotalDonate(totalCase)
  }
}
