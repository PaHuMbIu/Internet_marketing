const correctUserName = /^[a-zA-Z0-9]+$/;
const buttonOpenEl = document.querySelector('.btn-open');
const fieldNameEl = document.querySelector('.field-name');
const fieldPhoneNumberEl = document.querySelector('.filed-phone-number');
const errorNameEl = document.querySelector('.error-name');
const errorPhoneNumberEl = document.querySelector('.error-phone-number');

buttonOpenEl.addEventListener('click', () => {
    const currentFieldName =  fieldNameEl.value;
    const currentPhoneNumber = fieldPhoneNumberEl.value;

    correctNameOrPhone(currentFieldName, currentPhoneNumber);
});

fieldNameEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        buttonOpenEl.click();
    }
});

fieldPhoneNumberEl.addEventListener('keypress', (event) => {
   if (event.key === 'Enter') {
       buttonOpenEl.click();
   }
});

function correctNameOrPhone(currentFieldName, currentPhoneNumber) {

    if (correctUserName.test(currentFieldName)) {

        errorNameEl.classList.remove('error-message-name');
        fieldNameEl.classList.remove('error-form-field-name');

    }
    else if (currentFieldName === '') {

        errorNameEl.classList.add('error-message-name');
        fieldNameEl.classList.add('error-form-field-name');

    }

    if (correctPhoneEl.test(currentPhoneNumber)) {

        errorPhoneNumberEl.classList.remove('error-message-phone');
        fieldPhoneNumberEl.classList.remove('error-form-field-phone');

    }
    else if (currentPhoneNumber === '') {

        errorPhoneNumberEl.classList.add('error-message-phone');
        fieldPhoneNumberEl.classList.add('error-form-field-phone');

    }
}

fieldPhoneNumberEl.addEventListener('input', () => {

    let inputValue = fieldPhoneNumberEl.value;

    if (inputValue.length === 2 && /^[0-9]{2}$/.test(inputValue)) {

        inputValue = '+7 ' + inputValue.slice(1);
        fieldPhoneNumberEl.value = inputValue;

    } else if (correctPhoneEl.test(inputValue)) {

        IMask(fieldPhoneNumberEl, {
            mask: '+{7} 000 000-00-00'
        });

    }
});