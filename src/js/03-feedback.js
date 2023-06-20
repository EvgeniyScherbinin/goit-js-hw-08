import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');


const FORM_KEY = "feedback-form-state";
form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener("submit", cleanStorege);
const formInput = {};


function cleanStorege(e) {
    e.preventDefault();
    form.reset();
    localStorage.removeItem(FORM_KEY);
    console.log(formInput)
};


function saveInput() {
    formInput.email = email.value,
    formInput.message = message.value
    localStorage.setItem(FORM_KEY, JSON.stringify(formInput));
};


const formInputSave = JSON.parse(localStorage.getItem(FORM_KEY));

if (formInputSave) {
    email.value = formInputSave.email;
    message.value = formInputSave.message;
};

