import dogs from './data.js'
import Dog from './Dog.js'

document.getElementById("nope").addEventListener("click", nope)
document.getElementById("yes").addEventListener("click", yes)

let dogsQty = 0
let currentDog = new Dog(dogs[dogsQty])

render()

function render(){
    document.getElementById("main").innerHTML = currentDog.getDogHtml()
}

function repeat(){
    if(dogsQty === 2){
        dogsQty = -1
     }
}

function getNewDog() {
    dogsQty += 1
    currentDog = new Dog(dogs[dogsQty])
    setTimeout( () => render(), 300)
}

function yes(){
    getNewDog()
    repeat()
    document.getElementById("yes").style.display = "block"        
}

function nope(){
    getNewDog()   
    repeat()    
    document.getElementById("nope").style.display = "block"   
}