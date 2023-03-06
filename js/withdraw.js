document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const previousBalanceTotal = getTextElementValueById('balance-total');
  const previousWithdrawTotal = getTextElementValueById('withdraw-total');
  if (errorHandling(newWithdrawAmount, previousBalanceTotal)) {
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
  }
});
