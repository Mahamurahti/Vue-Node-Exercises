// tasks.js
// This script manages a to-do list.

'use strict';

// Need a global variable:
let tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {

    // Get the task:
    let task = document.getElementById('task');

    // Reference to where the output goes:
    let output = document.getElementById('output');
    
    // For the output:
    let message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (let i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

function deleteDuplicates(){
    // Make a set (automatically removes duplicates)
    tasks = [...new Set(tasks)];
    let output = document.getElementById('output');
    let message = '';

    // If there is something in the list, then execute the duplicate deletion
    if(tasks.length > 0){
        message = '<h2>To-Do</h2><ol>';
        for (let i = 0; i < tasks.length; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';

        output.innerHTML = message;
    }
}

// Initial setup:
function init() {
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById('delete').onclick = deleteDuplicates;
} // End of init() function.
window.onload = init;