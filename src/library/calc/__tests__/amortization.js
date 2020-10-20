import { generateAmortizationSchedule } from '../amortization';

test('generates amortization schedule', () => {
  const principal = 320000;
  const interestRatePerAnnum = 0.026;
  const totalMonths = 300;
  const { totalPayment, amortizationSchedule } = generateAmortizationSchedule({
    principal,
    interestRatePerAnnum,
    totalMonths,
  });
  expect(Number(totalPayment.toFixed(2))).toBe(1451.74);
  expect(amortizationSchedule).toHaveLength(totalMonths);
  expect(
    amortizationSchedule[amortizationSchedule.length - 1]
      .outstandingLoanBalance,
  ).toBeCloseTo(0);
});
