import constants from './constants';
import { solveForOneUnknownVariable } from './solver';

generateAmortizationSchedule = ({
  principal,
  interestRatePerAnnum,
  compoundRatePerMonth = 1,
  totalMonths,
}) => {
  const totalPayment = solveForOneUnknownVariable(
    'm=p*(((r/n)*(1+(r/n))^(n*t))/((1+(r/n))^(n*t)-1))',
    {
      p: principal.toString(),
      r: (interestRatePerAnnum / constants.TOTAL_MONTHS_PER_YEAR).toString(),
      n: compoundRatePerMonth.toString(),
      t: totalMonths.toString(),
    },
    'm',
  );
  return {
    totalPayment,
    // TODO: principalPayment, interestPayment, interestToDate, outstandingLoanBalance
  };
};
