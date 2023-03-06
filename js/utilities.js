'use-strict';

// collect the inserted input as number

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

// collect and convert the number type text from the document as number

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

// handling errors

function userInputError(inputError) {
  if (isNaN(inputError) || inputError === 0 || inputError < 0) {
    alert(`Please provide a valid number, not like a, b, c or negative or 0`);
    return false;
  }
  return true;
}

function errorHandling(userInput, storedBalance) {
  userInputError(userInput);

  if (userInput > storedBalance) {
    alert(`Withdraw amount cannot be greater than current balance`);
    return false;
  }
  return true;
}

// set the result value on document

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
