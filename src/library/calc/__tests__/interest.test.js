import { calcCompoundInterest, calcSimpleInterest } from '../interest';

test('calculates simple interest', () => {
  const principal = 100000;
  const interestRatePerAnnum = 0.05;
  const totalMonths = 60;
  const { totalAmount, totalInterest } = calcSimpleInterest({
    principal,
    interestRatePerAnnum,
    totalMonths,
  });
  expect(totalAmount).toBe(125000);
  expect(totalInterest).toBe(25000);
});

test('calculates compound interest', () => {
  const principal = 10000;
  const depositAmountPerMonth = 500;
  const interestRatePerAnnum = 0.01;
  const compoundRatePerMonth = 1;
  const totalMonths = 36;
  const { totalAmount, totalInterest } = calcCompoundInterest({
    principal,
    depositAmountPerMonth,
    interestRatePerAnnum,
    compoundRatePerMonth,
    totalMonths,
  });
  expect(Number(totalAmount.toFixed(2))).toBe(28569.41);
  expect(Number(totalInterest.toFixed(2))).toBe(569.41);
});
