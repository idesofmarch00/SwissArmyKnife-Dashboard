/**
 * DOM elements for the To-Do list functionality
 */
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

/**
 * Function to add a new To-Do item to the list
 */
function addToDo() {
    // Get all open To-Do items (not marked as completed)
    let openToDos = toDoContainer.querySelectorAll('p:not([style*="line-through"])');
    
    // Limit the number of open To-Do items to 3
    if (openToDos.length >= 3) {
        alert("You can only have 3 open todos at a time.");
        return;
    }

    // Create a new paragraph element for the To-Do item
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    
    // Append the new To-Do item to the container
    toDoContainer.appendChild(paragraph);
    
    // Clear the input field
    inputField.value = "";
    
    // Add event listener to mark the To-Do item as completed on click
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });
    
    // Add event listener to remove the To-Do item on double-click
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    });
}

// Add event listener to the "Add To-Do" button
addToDoButton.addEventListener('click', addToDo);

// Add event listener to the input field to add To-Do on pressing Enter key
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addToDo();
    }
});
