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

    concatNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.operate()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }

    operate() {
      let computation
      const current = parseFloat(this.currentOperand)
      const previous = parseFloat(this.previousOperand)
    
      if (isNaN(previous) || isNaN(current)) return
    
      switch (this.operation) {
        case '+' :
          computation = previous + current
          break
    
        case '-' :
          computation = previous - current
          break
    
        case 'x' :
          computation = previous * current
          break
    
        case '÷' :
          computation = previous / current
          break
    
        default:
          return
      }
  
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
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

