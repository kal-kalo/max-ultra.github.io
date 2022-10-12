let openOrClosed = []
let date = new Date;
let currentDay = date.getDate()
let currentMonth = date.getMonth() + 1
const activationMonth = 10;
const items = document.querySelectorAll('.item')
const itemNumbers = document.querySelectorAll('.item-number')
const itemOverlay = document.querySelector('.item-overlay')
let clickCounter = 0

console.log(currentDay)
console.log(currentMonth)

if (localStorage.days) {
    openOrClosed = JSON.parse(localStorage.getItem('days'))
}

items.forEach(function (element, index) {
    element.addEventListener('click', function(){
        clickHandler(element)
    })

    if (openOrClosed[index] == true) {
        element.classList.add('open')
    }
})

function clickHandler(elm) {

    const x = currentDay - 1

    if (x >= elm.dataset.date && currentMonth == activationMonth) {
        if (elm.classList.contains('open')) {
            elm.classList.remove('open')
            openOrClosed[elm.dataset.date] = false
        }
        else {
            elm.classList.add('open')
            openOrClosed[elm.dataset.date] = true
        }

        localStorage.setItem('days', JSON.stringify(openOrClosed))
    }
    else {
        console.log(elm)
        /* let warnElement = elm.querySelector('.item-overlay')*/        
        
        elm.querySelector('.warn-div').innerText = 'not yet'

        if(elm.querySelector('.warn-div').innerText == 'not yet'){
            elm.querySelector('.warn-div').style.color = "darkblue"
            window.setTimeout(function(){
                elm.querySelector('.warn-div').style.color = "white"
            },100)
        }    
    }

}