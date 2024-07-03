let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function addToDo() {
    let openToDos = toDoContainer.querySelectorAll('p:not([style*="line-through"])');
    if (openToDos.length >= 3) {
        alert("You can only have 3 open todos at a time.");
        return;
    }

    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}

addToDoButton.addEventListener('click', addToDo);

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addToDo();
    }
});

