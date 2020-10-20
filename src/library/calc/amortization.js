import { TOTAL_MONTHS_PER_YEAR } from './constants';
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
      r: (interestRatePerAnnum / TOTAL_MONTHS_PER_YEAR).toString(),
      n: compoundRatePerMonth.toString(),
      t: totalMonths.toString(),
    },
    'm',
  );
  const amortizationSchedule = Array.from(
    { length: totalMonths },
    (_, numPayments) => {
      return {
        outstandingLoanBalance: principal - numPayments * totalPayment,
      };
    },
  );
  return {
    totalPayment,
    amortizationSchedule,
    // TODO: principalPayment, interestPayment, interestToDate
  };
};
