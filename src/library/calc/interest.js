import { TOTAL_MONTHS_PER_YEAR } from './constants';
import { solveForOneUnknownVariable } from './solver';

export const calcCompoundInterest = ({
  principal,
  depositAmountPerMonth = 0,
  interestRatePerAnnum,
  compoundRatePerMonth = 1,
  totalMonths,
}) => {
  const totalAmount = solveForOneUnknownVariable(
    'a=(p*(1+(r/n))^(n*t))+(q*(((1+(r/n))^(n*t)-1)/(r/n)))',
    {
      p: principal.toString(),
      q: depositAmountPerMonth.toString(),
      r: (interestRatePerAnnum / TOTAL_MONTHS_PER_YEAR).toString(),
      n: compoundRatePerMonth.toString(),
      t: totalMonths.toString(),
    },
    'a',
  );
  return {
    totalAmount,
    totalInterest:
      totalAmount - (principal + depositAmountPerMonth * totalMonths),
  };
};

export const calcSimpleInterest = ({
  principal,
  interestRatePerAnnum,
  totalMonths,
}) => {
  const totalAmount = solveForOneUnknownVariable(
    'a=p+p*r*t',
    {
      p: principal.toString(),
      r: (interestRatePerAnnum / TOTAL_MONTHS_PER_YEAR).toString(),
      t: totalMonths.toString(),
    },
    'a',
  );
  return {
    totalAmount,
    totalInterest: totalAmount - principal,
  };
};
