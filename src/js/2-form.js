'use strict';

const form = document.querySelector('.feedback-form');


function saveToLocalStorage() {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormFromLocalStorage() {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedFormData) {
        form.elements.email.value = savedFormData.email;
        form.elements.message.value = savedFormData.message;
    }
}

form.addEventListener('input', saveToLocalStorage);
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };

    if (formData.email && formData.message) {
     
        console.log(formData);

        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Please fill in both email and message fields.');
    }
});


populateFormFromLocalStorage();