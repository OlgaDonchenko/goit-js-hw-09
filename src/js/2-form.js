'use strict';

const form = document.querySelector('.feedback-form');

// Функція для збереження значень полів у локальне сховище
function saveToLocalStorage() {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція для заповнення полів форми зі значеннями з локального сховища
function populateFormFromLocalStorage() {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedFormData) {
        form.elements.email.value = savedFormData.email;
        form.elements.message.value = savedFormData.message;
    }
}

// Прослуховуємо події input і submit на формі
form.addEventListener('input', saveToLocalStorage);
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо дійсне подання форми

    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };

    // Перевіряємо, чи заповнені обидва елементи форми
    if (formData.email && formData.message) {
        // Виводимо дані форми в консоль
        console.log(formData);

        // Очищаємо локальне сховище та поля форми
        localStorage.removeItem('feedback-form-state');
        form.reset();
    } else {
        alert('Please fill in both email and message fields.');
    }
});

// При завантаженні сторінки заповнюємо форму зі значеннями з локального сховища
populateFormFromLocalStorage();