// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector('#form');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmationInput = document.querySelector('#password-confirmation');
const termsCheckbox = document.querySelector('#terms');
const errorsContainer = document.querySelector('.errors');
const errorList = document.querySelector('.errors-list');

//    TODO: Create an array to store all error messages and clear any old error messages

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener('submit', (e) => {
  const errorMsgs = [];
  clearErrors();
  //    TODO: Define the following validation checks with appropriate error messages

  //      1. Ensure the username is at least 6 characters long
  if (userNameInput.value < 6) {
    errorMsgs.push('Username has to be 6 characters long. Try again!');
  }
  //      2. Ensure the password is at least 10 characters long
  if (passwordInput.value < 10) {
    errorMsgs.push('password has to be 10 characters long. Try again!');
  }
  //      3. Ensure the password and confirmation password match
  if (confirmationInput.value !== passwordInput.value) {
    errorMsgs.push('passwrods do not match!');
  }
  //      4. Ensure the terms checkbox is checked
  if (!termsCheckbox.checked) {
    errorMsgs.push(
      'You have not agreed the terms, please read the terms and check the box',
    );
  }
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMsgs.length > 0) {
    e.preventDefault();
    clearErrors();
    showErrors(errorMsgs);
  }
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }
  errorsContainer.classList.remove('show');
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errMsgs) {
  errMsgs.forEach((errMsg) => {
    const errorItem = document.createElement('li');
    errorItem.innerText = errMsg;
    errorList.appendChild(errorItem);
  });

  errorsContainer.classList.add('show');
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}
