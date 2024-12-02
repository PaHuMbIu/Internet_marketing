// CONTACT BOX
const contactBoxEl = document.querySelector('.contact-box');
const telephoneNavEl = document.querySelector('.telephone-nav');

telephoneNavEl.addEventListener('mouseenter', () => {
    contactBoxEl.style.opacity = '1';
    contactBoxEl.style.transition = 'opacity 0.2s ease';
});

telephoneNavEl.addEventListener('mouseleave', () => {
    contactBoxEl.style.opacity = '0';
    contactBoxEl.style.transition = 'opacity 0s ease';
});

// SELECTED NAVIGATION
const fieldNavEls = document.querySelectorAll('.field-nav');

for (const field of fieldNavEls) {
    fieldNavEls[0].classList.add('selected-field-nav');
    field.addEventListener('click', () => {
        fieldNavEls.forEach(el => {el.classList.remove('selected-field-nav')});
        field.classList.add('selected-field-nav');
    });
}

// SEARCH
const searchIconEl = document.querySelector('.search-icon');
const searchContainerEl = document.querySelector('.search-container');
const searchInputEl = document.querySelector('.search-input');

searchIconEl.addEventListener('click', () => {
    searchContainerEl.style.display = 'flex';
    searchInputEl.focus();
    overlay(overlayEl, true);
});

document.addEventListener('click', (event) => {
    if (event.target === overlayEl) {
        searchContainerEl.style.display = 'none';
        overlay(overlayEl, false);
    }
});