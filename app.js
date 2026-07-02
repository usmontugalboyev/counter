let count = document.getElementById("count")
let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")

let number = 0

function yangilash (){
    count.textContent = number

}
increment.addEventListener("click",()=>{
    number++
    yangilash()
})
decrement.addEventListener("click",()=>{
    number--
    yangilash()
})
reset.addEventListener("click",()=>{
    number = 0
    yangilash()
})