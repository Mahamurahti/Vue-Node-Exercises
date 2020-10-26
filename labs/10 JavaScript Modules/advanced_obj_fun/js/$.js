'use strict';

// Utility object $ that has one method: id
let $ = {
    // Finds an element from the page using getElementById()
    id: function (id) {
        if (typeof id == 'string') {
            console.log("Found something with and id of " + id);
            return document.getElementById(id);
        }
    }
}