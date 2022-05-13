//Calculator object declared

class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
    }

    clearAll() {
      this.previousOperand = ''
      this.currentOperand = ''
      this.operation = undefined
    }

    deleteLastDigit() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    
  
  

//UI DECLARATIONS

//buttons

const numberButtons = document.querySelectorAll('[data-number]') //more than 1 button and ALL-SELECTED
const operationButtons = document.querySelectorAll('[data-operation]') //more than 1 button and ALL-SELECTED
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const percentageButton = document.querySelector('[data-percentage]')
const equalsButton = document.querySelector('[data-equals]')

//text elements

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

