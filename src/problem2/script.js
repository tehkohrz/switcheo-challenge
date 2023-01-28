// Form submission
const onSubmitFormWithDelay = async (event) => {
  event.preventDefault();
  const form = document.getElementById('form-token-transfer');
  form.classList.remove('was-validated');
  // Runs the validation checks before submit
  addressValidation();
  quantityValidation();
  otpValidation();
  // Only submit if form is validated
  if (form.checkValidity()) {
    // Show loading spinner
    form.classList.add('was-validated');
    document.getElementById('loader').classList.remove('invisible');
    document.getElementById('loader').classList.add('visible');
    // three second delay
    await sleep(3000);
    form.submit();
  }
};
// Form Address Validation
const addressValidation = (event) => {
  const element = document.getElementById('input-address');
  // Reset styles and clean up feedback
  element.classList.remove('is-valid');
  element.classList.remove('is-invalid');
  document.getElementById('input-address-feedback').innerText = '';

  const address = element.value;
  let feedback = [];

  const invalidCharacters = checkInvalidCharacters(address, feedback);
  const invalidLength = checkInvalidLength(address, 'Address', 42, feedback);
  // Any of the validation failed
  if (invalidCharacters || invalidLength) {
    // Add in invalid feedback
    document.getElementById('input-address-feedback').innerText = feedback.join('\n');
    element.classList.add('is-invalid');
  } else {
    element.classList.add('is-valid');
  }
};

// Quantity validation - value > 0
const quantityValidation = (event) => {
  const element = document.getElementById('input-amount');
  const quantity = element.value;
  const feedback = [];

  element.classList.remove('is-valid');
  element.classList.remove('is-invalid');
  document.getElementById('input-amount-feedback').innerText = '';

  const invalidQuantity = checkInvalidQuantity(quantity, feedback);
  if (invalidQuantity) {
    document.getElementById('input-amount-feedback').innerText = feedback.join('\n');
    element.classList.add('is-invalid');
  } else {
    element.classList.add('is-valid');
  }
};

// OTP validation - assuming should be of length 6 only
const otpValidation = (event) => {
  const element = document.getElementById('input-otp');
  const OTP = element.value;
  const feedback = [];

  element.classList.remove('is-valid');
  element.classList.remove('is-invalid');
  document.getElementById('input-otp-feedback').innerText = '';

  const invalidOTP = checkInvalidLength(OTP, 'OTP', 6, feedback);
  if (invalidOTP) {
    document.getElementById('input-otp-feedback').innerText = feedback.join('\n');
    element.classList.add('is-invalid');
  } else {
    element.classList.add('is-valid');
  }
};

// Validation helpers
// Checks that the input is of alphanumeric characters only
function checkInvalidCharacters(text, feedback) {
  if (!text.match(/^[0-9a-z]+$/)) {
    feedback.push('Address is not alphanumeric.');
    return true;
  }
  return false;
}
// Checks the length of the input to meet characters
function checkInvalidLength(text, field, requiredLength, feedback) {
  if (text.length < requiredLength) {
    feedback.push(`${field} is too short.`);
    return true;
  } else if (text.length > requiredLength) {
    feedback.push(`${field} is too long.`);
    return true;
  }
  return false;
}
// Cehcks the input quantity is greater than zero
function checkInvalidQuantity(value, feedback) {
  if (value <= 0) {
    feedback.push('Value must be greater than zero.');
    return true;
  }
  return false;
}
// Sleep/delay function
function sleep(time) {
  console.log('wait', time);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}
//Bind validations
document.getElementById('input-address').addEventListener('focusout', addressValidation);
document.getElementById('input-amount').addEventListener('focusout', quantityValidation);
document.getElementById('input-otp').addEventListener('focusout', otpValidation);
document.getElementById('form-submit-button').addEventListener('click', onSubmitFormWithDelay);
