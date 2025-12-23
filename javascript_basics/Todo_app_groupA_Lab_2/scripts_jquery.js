$(document).ready(function () { // Ensure the DOM is fully loaded

    const $form = $('#container_add_note'); // Retrieve form
    const $noteInput = $('#txt_add_note'); // Note input field
    const $notes = $('.notes'); // Notes container

    // Initializing the counter

    let counter = parseInt(localStorage.getItem('counter')) || 0; // Convert to int as localStorage stores strings

    // Load notes from localStorage
    for (let j = 1; j <= counter; j++) {
        let key = `user${j}`; // Construct key that matches storage
        let value = localStorage.getItem(key); // Retrieve value from localStorage of the key

        if (value) { // Only add to UI if value is not null
            addNoteToDOM(key, value); //passing key and value to addNoteToDOM function
            let checked = localStorage.getItem(`${key}_checked`) === 'true';// Retrieve checkbox state
            $(`[data-key="${key}"] .checkbox`).prop('checked', checked); // Set checkbox state to saved value after loading the page
            //$(`[data-key="${key}"] .checkbox`).prop('checked', checked); here $ is used to select the element with data-key attribute equal to key and then find the checkbox inside it and set its checked property to the value of checked variable
            // .prop() is a jQuery method used to get or set properties of DOM elements
            // In this case, it is used to set the 'checked' property of the checkbox input element

        }
    }

    // Add note
    //in jquery $ is used to select the element and .on() is used to attach event listener and 'submit' is the event type and function(e) is the callback function that will be executed when the event is triggered
    $form.on('submit', function (e) {
        e.preventDefault(); // Prevent page reload on form submission

        counter++;
        localStorage.setItem('counter', counter); // Update counter in localStorage 'counter' is the key and counter is the value

        let key = `user${counter}`; // Construct key for the new note that will be displayyed as user1,user2,...
        let value = $noteInput.val(); // Get note value from input field
        //$noteInput.val() is used to get the value of the input field with id txt_add_note, without jquery it would be document.getElementById('txt_add_note').value

        localStorage.setItem(key, value);
        addNoteToDOM(key, value);

        $noteInput.val(''); // Clear input field after adding the note
    });

    // Delete note (event delegation)
    $notes.on('click', '.btn_delete', function () { 
        let $container = $(this).parent();// 'this' refers to the clicked delete button
        //.parent() is a jQuery method that returns the parent element of the selected element
        //$container is a jQuery object representing the parent element of the clicked delete button, 
        //here $ is used to indicate that it is a jQuery object

        let key = $container.data('key'); // Get the data-key attribute of the container, .data() is a jQuery method used to get the value of a data attribute of an element

        localStorage.removeItem(key); // Remove note from localStorage
        localStorage.removeItem(`${key}_checked`); // Remove checkbox state from localStorage

        $container.remove();
    });

    // Checkbox state
    $notes.on('change', '.checkbox', function () { 
        let key = $(this).parent().data('key'); // Get the data-key attribute of the container
        localStorage.setItem(`${key}_checked`, $(this).is(':checked')); // Save checkbox state to localStorage
        // .is(':checked') is a jQuery method that returns true if the checkbox is checked, false otherwise
    });

    function addNoteToDOM(key, note) {
        $notes.append(`
            <div class="container_new_note" data-key="${key}">
                <input type="checkbox" class="checkbox">
                <div class="note_name_display">${note}</div>
                <button class="btn_delete">Delete</button>
            </div>
        `);
        // $notes.append() is used to add the new note HTML to the notes container
        //${note} is used for string interpolation to insert the value of note variable into the HTML
    }

});
