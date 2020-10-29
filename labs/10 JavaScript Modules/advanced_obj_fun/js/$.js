(function (window) {
    'use strict';

    // Utility object $ that has one method: id
    function $(){

    }

    // Prototype method
    $.prototype.id = function (id) {
        // Finds an element from the page using getElementById()
        if (typeof id == 'string') {
            console.log("Found something with and id of '" + id + "'");
            return document.getElementById(id);
        }
    }

    // Export to window
    window.app = window.app || {};
    window.app.$ = $;

}(window));