//Calculator object declared

class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clearAll() //onload function triggered
    }

//AC Button function

    clearAll() {
      this.previousOperand = ''
      this.currentOperand = ''
      this.operation = undefined
    }

//DEL Button function

    deleteLastDigit() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }


//a function for making numbers with multiple digits

    concatNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return //prevents multiple "." character
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }

// a function for choosing operation type

    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.operate()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }

//a function to make computations

    operate() {

      let computation //empty variable declaration

      //turning Strings into numbers to make calculations by numbers
      const current = parseFloat(this.currentOperand) 
      const previous = parseFloat(this.previousOperand)
    
      if (isNaN(previous) || isNaN(current)) return //preventing calculations between meaningless numbers
    
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
          computation = parseFloat((previous / current).toFixed(5)) // keeping decimal length with 5 digit
          break
        
        default:
          return
      }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

//a function to update screen for output elements

    updateScreen() {
  
      this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
        }
      }
    
//a function to get integer or decimal number

    getDisplayNumber(number) {
      const stringNumber = number.toString() //turning numbers into a string to be used in string method "split"
      const integerDigits = parseFloat(stringNumber.split('.')[0]) //turning gathered string into a number to make calculations by numbers
      const decimalDigits = stringNumber.split('.')[1]
          
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits : 0})
      }
      if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
      }
    } 

//% BUTTON function

    makePercentage() {
      this.currentOperand = (this.currentOperand / 100)
      this.operation = undefined
      this.previousOperand =''
      this.currentOperandTextElement.innerText = this.currentOperand
    }
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

//EVENT LISTENERS

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => 
  {button.addEventListener('click', () => {
  calculator.concatNumber(button.innerText)
  calculator.updateScreen()
  })
})

operationButtons.forEach(button => 
  {button.addEventListener('click', () => {
  calculator.chooseOperation(button.innerText)
  calculator.updateScreen()
  })
})

allClearButton.addEventListener('click', button => {
  calculator.clearAll()
  calculator.updateScreen()
})

deleteButton.addEventListener('click', button => {
  calculator.deleteLastDigit()
  calculator.updateScreen()
})

percentageButton.addEventListener('click', button => {
  calculator.makePercentage()
})

equalsButton.addEventListener('click', button => {
  calculator.operate()
  calculator.updateScreen()
})

// KEYBOARD SUPPORT

document.addEventListener('keydown', (event) => { //event will be made when the keyboard key is DOWN
  if (event.key == "0") { // keyboard key with an event is defined
    document.getElementById('zero').click()
} else if (event.key == "1") {
    document.getElementById('one').click()
  }
    else if (event.key == "2") {
    document.getElementById('two').click()
  }
    else if (event.key == "3") {
    document.getElementById('three').click()
  }
    else if (event.key == "4") {
    document.getElementById('four').click()
  }
    else if (event.key == "5") {
    document.getElementById('five').click()
  }
    else if (event.key == "6") {
    document.getElementById('six').click()
  }
    else if(event.key == "7") {
    document.getElementById('seven').click()
  }
    else if(event.key == "8") {
    document.getElementById('eight').click()
  }
    else if(event.key == "9") {
    document.getElementById('nine').click()
  }
    else if(event.key == "+") {
    document.getElementById('plus').click()
  }
    else if(event.key == "-") {
    document.getElementById('minus').click()
  }
    else if(event.key == "*") {
    document.getElementById('multiply').click()
  }
    else if(event.key == "/") {
    document.getElementById('division').click()
  }
    else if(event.key == ".") {
    document.getElementById('decimal').click()
  }
    else if(event.key == "Enter") {
    document.getElementById('equals').click()
  }
    else if(event.key == "Escape") {
    document.getElementById('clearAll').click()
  }
    else if(event.key == "Backspace") {
    document.getElementById('delete').click()
  }
    else if(event.key == "%") { 
    document.getElementById('percent').click()
  }
})







