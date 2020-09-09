/**
 * Calculates compound interest.
 *
 * Uses the formula A = P(1 + r/n)^(nt).
 *
 * @param {Object} param                     Object containing parameters.
 * @param {Number} param.principal           Principal amount.
 * @param {Number} param.interestRate        Interest rate.
 * @param {Number} param.compoundRate        Number of times interest rate is added per time period.
 * @param {Number} param.numInterestDeposits Number of time periods.
 *
 * @return {Object} Object containing totalAmount and totalInterest.
 */
const calcCompoundInterest = ({
  principal,
  interestRate,
  compoundRate = 1,
  numInterestDeposits,
}) => {
  const totalAmount =
    principal *
    Math.pow(
      1 + interestRate / compoundRate,
      compoundRate * numInterestDeposits
    );
  return {
    totalAmount: totalAmount,
    totalInterest: totalAmount - principal,
  };
};

module.exports = {
  calcCompoundInterest,
};
