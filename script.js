//selectors
let lightbulb1 = document.querySelector('#lightbulb1')
let lightbulb2 = document.querySelector('#lightbulb2')
let lightbulb3 = document.querySelector('#lightbulb3')
let subtitle = document.querySelector('.subtitle')

let count = 0

lightbulb1.addEventListener('click', function(){
    count++
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    this.classList.toggle('active')
})

lightbulb2.addEventListener('click', function(){
    count++
    subtitle.innerHTML =`You've clicked the lights ${count} times`
    this.classList.toggle('active')
})

lightbulb3.addEventListener('click', function(){
    count++
    subtitle.innerHTML = `You've clicked the lights ${count} times`
    this.classList.toggle('active')
})