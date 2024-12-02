const buttonEl = document.querySelector('.btn-login');
const containerModalWindowEl = document.querySelector('.container-modal-window-nav');
const overlayEl = document.createElement('div');

// OPEN MODAL WINDOW
buttonEl.addEventListener('click', () => {
    containerModalWindowEl.classList.add('show-modal-window');
    modalWindowDialogueEl.focus();
    overlay(overlayEl, true);
});

// ClOSE MODAL WINDOW
const closeModalWindowEl = document.querySelector('.close-modal-window');

closeModalWindowEl.addEventListener('click', () => {
    containerModalWindowEl.classList.remove('show-modal-window');
    modalWindowDialogueEl.value = '';
    errorMessageEl.classList.remove('show-error-message');
    overlay(overlayEl, false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && containerModalWindowEl.classList.contains('show-modal-window')) {
        containerModalWindowEl.classList.remove('show-modal-window');
        modalWindowDialogueEl.value = '';
        errorMessageEl.classList.remove('show-error-message');
        overlay(overlayEl, false);
    }
});

// SHOW, REMOVE OVERLAY
function overlay(overlayEl, isVisible) {

    if (isVisible) {
        overlayEl.classList.add('overlay');
        document.body.prepend(overlayEl);
    } else if (overlayEl.classList.contains('overlay')) {
        overlayEl.classList.remove('overlay');
        overlayEl.remove();
    }
}

// MORE INFORMATION HEADER
const moreInformationEl = document.querySelector('.more-information');
const dropDownMenuEl = document.querySelector('.dropdown-menu');

moreInformationEl.addEventListener('mouseenter', () => {
    dropDownMenuEl.classList.add('show-menu');
});

moreInformationEl.addEventListener('mouseleave', () => {
    dropDownMenuEl.classList.remove('show-menu');
});

// CORRECT OR WRONG EMAIL, PHONE
const correctEmailEl = /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
const correctPhoneEl = /^\+?(\d{1,3})?[-\s]?\(?\d{1,4}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/i;

const loginModalWindowEl = document.querySelector('.login-modal-window > button');
const errorMessageEl = document.querySelector('.error-message');
const modalWindowDialogueEl = document.querySelector('.modal-window-dialogue');

modalWindowDialogueEl.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const inputValue = modalWindowDialogueEl.value;
        correctOrWrong(inputValue);
    }
});

loginModalWindowEl.addEventListener('click', () => {
    const inputValue = modalWindowDialogueEl.value;
    correctOrWrong(inputValue);
});

function correctOrWrong(inputValue) {

    if (correctEmailEl.test(inputValue)) {

        errorMessageEl.classList.remove('show-error-message');
        modalWindowDialogueEl.classList.remove('error-outline');

    } else if (correctPhoneEl.test(inputValue)) {

        errorMessageEl.classList.remove('show-error-message');
        modalWindowDialogueEl.classList.remove('error-outline');

    } else {

        errorMessageEl.classList.add('show-error-message');
        modalWindowDialogueEl.classList.add('error-outline');
    }
}

// MASK PHONE
modalWindowDialogueEl.addEventListener('input', () => {
    let inputValue = modalWindowDialogueEl.value;

    if (correctEmailEl.test(inputValue)) {
        modalWindowDialogueEl.value = inputValue;
    }
    if (inputValue.length === 2 && /^[0-9]{2}$/.test(inputValue)) {

        inputValue = '+7 ' + inputValue.slice(1);
        modalWindowDialogueEl.value = inputValue;

    } else if (correctPhoneEl.test(inputValue)) {

        IMask(modalWindowDialogueEl, {
            mask: '+{7} 000 000-00-00'
        });

    }
});