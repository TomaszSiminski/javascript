// document.getElementById("count").innerText = 3

let count = 0
let elemID = document.getElementById("elementID")
let buttonID = document.getElementById("increment-btn")
let sum_save

function increment() {
    count += 1
    document.getElementById("count").innerText = count
    elemID.innerText = buttonID
    console.log("Button was clicked");
}

function save() {
    let sumContent = document.getElementById("Sum").textContent
    document.getElementById("Sum").innerText += count    
}

function welcome(){
    let name = 'Tomasz'
    let surname = 'Siminski'
    document.getElementById("welcome").innerText = "Welcome back: " + name + " " + surname

}