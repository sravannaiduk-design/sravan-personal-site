'use strict';

// Mobile navigation: button state is exposed to assistive technology with aria-expanded.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}

// Keep the copyright year current.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Client-side accessible validation for the demo contact form.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const status = document.querySelector('#form-status');
  const fields = [
    { id: 'name', message: 'Please enter your name (at least 2 characters).' },
    { id: 'email', message: 'Please enter a valid email address.' },
    { id: 'message', message: 'Please enter a message (at least 10 characters).' }
  ];

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let firstInvalid = null;
    let valid = true;

    fields.forEach(({ id, message }) => {
      const field = document.getElementById(id);
      const error = document.getElementById(`${id}-error`);
      const fieldIsValid = field.checkValidity();
      error.textContent = fieldIsValid ? '' : message;
      field.setAttribute('aria-invalid', String(!fieldIsValid));
      if (!fieldIsValid) {
        valid = false;
        firstInvalid = firstInvalid || field;
      }
    });

    if (!valid) {
      status.textContent = 'Please review the highlighted fields.';
      firstInvalid.focus();
      return;
    }

    status.textContent = 'Your form entries look good. This demo does not send messages; connect a form service to receive them.';
    contactForm.reset();
    fields.forEach(({ id }) => {
      document.getElementById(id).removeAttribute('aria-invalid');
    });
  });

  fields.forEach(({ id }) => {
    const field = document.getElementById(id);
    field.addEventListener('input', () => {
      const error = document.getElementById(`${id}-error`);
      if (field.checkValidity()) {
        error.textContent = '';
        field.removeAttribute('aria-invalid');
      }
    });
  });
}
