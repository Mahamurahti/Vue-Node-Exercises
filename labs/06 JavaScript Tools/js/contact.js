// contact.js
// This script checks a contact form submission for HTML and a valid email address.

// Function called when the form is submitted.
// Function validates the data and returns a Boolean. (Logs to console in this example)
function process(event) {
    'use strict';

    event.preventDefault();

    // Variable to represent validity:
    let name = true, mail = true, comment = true, allok = false;
    
    // Get form references:
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('email');
    let comments = document.getElementById('comments');

    // Validate the email address:
    if (!email || !email.value 
    || (email.value.length < 6) 
    || (email.value.indexOf('@') === -1)) {
        mail = false;
        alert('Please enter a valid email address!');
    }

    // Validate the comments:
    let maxLength = 100;
    if (!comments || !comments.value 
    || (comments.value.indexOf('<') !== -1) ) {
        comment = false;
        alert('Please enter your comments, without any HTML!');
    } else if (comments.value.length > maxLength) {
        comment = false;
        let originalText = comments.value;
        // Find the last space before the limit:
        let lastSpace = originalText.lastIndexOf(' ', maxLength);
        // Trim the text to that spot:
        comments.value = originalText.slice(0, lastSpace);
        comment = true;

        alert('Comment was trimmed under ' + maxLength + ' characters');
    }

    // Tests:
    //console.log("Full name length: " + fullName.value.length);
    //console.log("Is valid length: " + !(fullName.value.length < 2 || fullName.value.length > 101));
    //console.log("Has space: " + (fullName.value.indexOf(' ') >= 0));

    // Validate full name:
    if (!(fullName.value.length < 2 || fullName.value.length > 101)
        && !(fullName.value.indexOf(' ') >= 0)){
        name = false;
        alert('Full name has to be between 2-100 characters and separated with a space.');
    }
        
    // Normally you would "return okay;" here to submit/block the form submission
    // return okay;

    // Is everything ok?
    if(name && mail && comment){
        allok = true;
    }

    // For this example we alert the user and log details to the console
    let message;
    if (allok) {
        message = "Form submitted";
    } else {
        message = "Form not submitted";
    }
    console.log(message);
    console.log("Full name: " + fullName.value);
    console.log("Email: " + email.value);
    console.log("Comments: " + comments.value);
    alert(message);

    // Prevent submission for the purposes of this example:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;