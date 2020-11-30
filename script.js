const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('.signup-form');
const inputs = document.querySelectorAll('.signup-form__input-container');

const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const emailErrorMsg = document.querySelector('#email + .error > .error__msg');

const emailPattern = email => {
  // abc@email.com
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
};

const validateEmail = () => {
  const isValidEmail = emailPattern(email.value);

  if (email.value !== '' && !isValidEmail) {
    emailError.classList.add('show');
    emailErrorMsg.innerText = 'Looks like this is not an email';
    email.classList.add('error-input');
  }
};

const checkInput = () => {
  for (let i = 0; i <= inputs.length - 1; i++) {
    const inputValue = inputs[i].querySelector('.signup-form__input');
    const error = inputs[i].querySelector('.error');
    const errorMsg = inputs[i].querySelector('.error__msg');

    // check input value
    if (inputValue.value === '') {
      error.classList.add('show');
      inputValue.classList.add('error-input');
      errorMsg.innerText = `${inputValue.placeholder} cannot be empty`;
    }

    // validate email and remove error
    else {
      error.classList.remove('show');
      inputValue.classList.remove('error-input');

      validateEmail();
    }
  }
};

const submitForm = e => {
  e.preventDefault();
  checkInput();
  // form.reset();
};

submitBtn.addEventListener('click', submitForm);
