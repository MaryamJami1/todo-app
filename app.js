let input = document.getElementById("input-value");
function add(){

let inputValue = input.value
let li = document.createElement("li")
li.innerHTML=inputValue
let div = document.getElementById("li")
div.appendChild(li).className="list"
}
