let input = document.getElementById("input");
let parent = document.getElementById("parent-li")

function add() {
    if (input.value == "") {
        Swal.fire({

            text: "Please write a task!",
            icon: "warning",
            confirmButtonColor: "#3085d6",

        })
    }
    else {
        let inputValue = input.value;
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        li.className = "li"
        parent.appendChild(li)
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
        deleteBtn.setAttribute("onclick", "removelist(event)")
        deleteBtn.setAttribute("type", "button")
        deleteBtn.setAttribute("class", "btnStyle")
        li.appendChild(deleteBtn)

    let editBtn = document.createElement("button")
    editBtn.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>"
    editBtn.setAttribute("type","button")
    editBtn.setAttribute("onclick","edit(event)")
    editBtn.setAttribute("class", "btnStyle")
li.appendChild(editBtn)

    }
    input.value = ""
}



function removelist(event) {
    event.target.parentNode.parentNode.remove()

}




function edit(event){
    var updated = prompt("updated task",event.target.parentNode.firstChild.nodeValue)
  
    event.target.parentNode.parentNode.firstChild.nodeValue = updated
  }

function dlt() {
    parent.remove()
}