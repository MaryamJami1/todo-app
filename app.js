let input = document.getElementById("input-value");
function add() {


    if (input.value == "") {
        alert("Please add your task")
    }
    else {
        let inputValue = input.value
        let li = document.createElement("li")
        li.className = "list"
        li.innerHTML = inputValue
        let div = document.getElementById("li")
        div.appendChild(li)
        
    }
    input.value = "";
}
