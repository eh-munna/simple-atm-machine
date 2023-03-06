// DRY ---> Do Not Repeat Yourself
document.getElementById('btn-deposit').addEventListener('click', function () {
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositTotal = getTextElementValueById('deposit-text');
  const previousBalanceTotal = getTextElementValueById('balance-total');
  if (userInputError(newDepositAmount)) {
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-text', newDepositTotal);

    // get previous balance by using the function
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
  }
});
