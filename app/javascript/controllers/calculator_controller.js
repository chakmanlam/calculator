import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }

  plus() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "+"
  }

  one() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "1"
  }

  two() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "2"
  }

  three() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "3"
  }

  four() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "4"
  }

  five() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "5"
  }

  six() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "6"
  }

  seven() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "7"
  }

  eight() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "8"
  }

  nine() {
    const screenElement = this.element.querySelector('#calculator-screen')
    screenElement.innerHTML += "9"
  }
}
