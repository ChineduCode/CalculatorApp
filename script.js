const numberBtn = document.querySelectorAll('[data-num]')
const operationBtn = document.querySelectorAll('[data-operation]')
const deleteBtn = document.querySelector('[data-delete]')
const resetBtn = document.querySelector('[data-reset]')
const equalsBtn = document.querySelector('[data-equals]')
const currentScreen = document.querySelector('.current-text')
const previousScreen = document.querySelector('.previous-text')

let operation = undefined
let currentOperand = ''
let previousOperand = ''
let total = ''

numberBtn.forEach(btn => btn.addEventListener('click', ()=>{
    if(btn.innerText === '.' && currentOperand.includes('.')) return
    currentOperand = currentOperand + btn.innerText
    currentScreen.innerText = currentOperand
}))

operationBtn.forEach(btn => btn.addEventListener('click', ()=>{
    if(previousOperand != '' && currentOperand != ''){compute()} //continues calculation

    if(currentOperand === '') return // to avoid either operations appearing first

    previousOperand = previousOperand + currentOperand
    
    if(currentOperand.includes(`+`)) return
    if(currentOperand.includes(`-`)) return
    if(currentOperand.includes(`/`)) return
    if(currentOperand.includes(`*`)) return

    operation = btn.innerText
    
    currentOperand = currentOperand + operation
    previousScreen.innerText = currentOperand

    currentOperand = ''
    currentScreen.innerText = currentOperand
}))

deleteBtn.addEventListener('click', ()=>{
    currentOperand = currentOperand.slice(0, currentOperand.length - 1)
    currentScreen.innerText = currentOperand
})

resetBtn.addEventListener('click', ()=>{
    currentOperand= ''
    previousOperand = ''
    currentScreen.innerText = currentOperand
    previousScreen.innerText = previousOperand
})

equalsBtn.addEventListener('click', ()=>{
    if(currentOperand === '' || previousOperand === ''){
        return
    }else{
        compute()
    }
})

const compute = ()=>{
    let previous = parseFloat(previousScreen.innerText)
    let current = parseFloat(currentScreen.innerText)
    if(operation == '*'){
        total = previous * current
    }else if(operation == '/'){
        total = previous / current
    }else if(operation == '+'){
        total = previous + current
    }else if(operation == '-'){
        total = previous - current
    }
    
    //clear the screen and display the total
    currentOperand= ''
    previousOperand = ''
    currentScreen.innerText = currentOperand
    previousScreen.innerText = previousOperand
    
    currentOperand = currentOperand + total
    currentScreen.innerText = currentOperand
}


//variable for toggling the theme
const mainContainer = document.querySelector('.main-container')
const themesInput = document.querySelectorAll('input')

themesInput.forEach(theme => theme.addEventListener('click', ()=>{
    if(theme.classList.contains('theme-1')){
        mainContainer.classList.add('main-container')
        mainContainer.classList.remove('second-theme')
        mainContainer.classList.remove('third-theme')
    }else if(theme.classList.contains('theme-2')){
        mainContainer.classList.add('second-theme')
        mainContainer.classList.remove('main-container')
        mainContainer.classList.remove('third-theme')
    }else{
        mainContainer.classList.add('third-theme')
        mainContainer.classList.remove('main-container')
        mainContainer.classList.remove('second-theme')
    }
}))

//function showing the current theme
themesInput.forEach(input => {
    input.addEventListener('click', ()=> {
        const activeInput = document.querySelectorAll('.active')
        activeInput[0].classList = activeInput[0].className.replace('active', '')

        input.className += ' active'
    })
})