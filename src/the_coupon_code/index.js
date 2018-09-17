function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const curDate = new Date(currentDate);
  const expDate = new Date(expirationDate);

  if(enteredCode === correctCode && curDate <= expDate) {
    return true;
  }
  return false;
}

module.exports = checkCoupon;
