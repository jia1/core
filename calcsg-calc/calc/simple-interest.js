/**
 * Calculates simple interest.
 *
 * Uses the formula A = P(1 + rt).
 *
 * @param {Object} param                     Object containing parameters.
 * @param {Number} param.principal           Principal amount.
 * @param {Number} param.interestRate        Interest rate.
 * @param {Number} param.numInterestDeposits Number of time periods.
 *
 * @return {Object} Object containing totalAmount and totalInterest.
 */
const calcSimpleInterest = ({
  principal,
  interestRate,
  numInterestDeposits,
}) => {
  const totalInterest = principal * interestRate * numInterestDeposits;
  return {
    totalAmount: principal + totalInterest,
    totalInterest,
  };
};

module.exports = {
  calcSimpleInterest,
};
