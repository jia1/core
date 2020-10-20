import { TOTAL_MONTHS_PER_YEAR } from './constants';
import { solveForOneUnknownVariable } from './solver';

export const generateAmortizationSchedule = ({
  principal,
  interestRatePerAnnum,
  compoundRatePerMonth = 1,
  totalMonths,
}) => {
  const interestRatePerMonth = interestRatePerAnnum / TOTAL_MONTHS_PER_YEAR;
  const totalPayment = solveForOneUnknownVariable(
    'm=p*(((r/n)*(1+(r/n))^(n*t))/((1+(r/n))^(n*t)-1))',
    {
      p: principal.toString(),
      r: interestRatePerMonth.toString(),
      n: compoundRatePerMonth.toString(),
      t: totalMonths.toString(),
    },
    'm',
  );
  const firstPrincipalPayment = calcPrincipalPayment({
    totalPayment,
    outstandingLoanBalance: principal,
    interestRatePerMonth,
    compoundRatePerMonth,
  });
  const firstInterestPayment = totalPayment - firstPrincipalPayment;
  const amortizationSchedule = [
    {
      principalPayment: firstPrincipalPayment,
      interestPayment: firstInterestPayment,
      interestToDate: firstInterestPayment,
      outstandingLoanBalance: principal - firstPrincipalPayment,
    },
  ];
  for (let i = 0; i < totalMonths - 1; i++) {
    const principalPayment = calcPrincipalPayment({
      totalPayment,
      outstandingLoanBalance: amortizationSchedule[i].outstandingLoanBalance,
      interestRatePerMonth,
      compoundRatePerMonth,
    });
    const interestPayment = totalPayment - principalPayment;
    const interestToDate =
      amortizationSchedule[i].interestToDate + interestPayment;
    const outstandingLoanBalance =
      amortizationSchedule[i].outstandingLoanBalance - principalPayment;
    amortizationSchedule.push({
      principalPayment,
      interestPayment,
      interestToDate,
      outstandingLoanBalance,
    });
  }
  return {
    totalPayment,
    amortizationSchedule,
  };
};

const calcPrincipalPayment = ({
  totalPayment,
  outstandingLoanBalance,
  interestRatePerMonth,
  compoundRatePerMonth,
}) => {
  return solveForOneUnknownVariable(
    'q=m-(b*(r/n))',
    {
      m: totalPayment.toString(),
      b: outstandingLoanBalance.toString(),
      r: interestRatePerMonth.toString(),
      n: compoundRatePerMonth.toString(),
    },
    'q',
  );
};
