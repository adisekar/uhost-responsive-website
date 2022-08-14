const backdropElement = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planButtonElements = document.querySelectorAll('#plans .button');
const modalActionElements = document.querySelectorAll('.modal__action');
const toggleBtnElement = document.querySelector('.toggle-button');
const mobileNavElement = document.querySelector('.mobile-nav');

planButtonElements.forEach((planButtonElement) => {
    planButtonElement.addEventListener('click', showModal);
});

modalActionElements.forEach((modalActionElement) => {
    modalActionElement.addEventListener('click', hideModal);
});

function showModal() {
    // backdropElement.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
    backdropElement.classList.add('open');
}

function hideModal() {
    // backdropElement.style.display = 'none';
    // modal.style.display = 'none';

    modal.classList.remove('open');
    backdropElement.classList.remove('open');
}

// Mobile Menu Toggle
toggleBtnElement.addEventListener('click', showMobileNav);

backdropElement.addEventListener('click', hideMobileNav);

function showMobileNav() {
    mobileNavElement.classList.add('open');
    backdropElement.classList.add('open');
}

function hideMobileNav() {
    mobileNavElement.classList.remove('open');
    backdropElement.classList.remove('open');
}


