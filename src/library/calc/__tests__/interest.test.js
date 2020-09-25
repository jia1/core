import { calcCompoundInterest, calcSimpleInterest } from '../interest';

test('calculates simple interest', () => {
  const principal = 200000;
  const interestRate = 0.02;
  const numInterestDeposits = 10;
  const { totalAmount, totalInterest } = calcSimpleInterest({
    principal,
    interestRate,
    numInterestDeposits,
  });
  expect(totalAmount).toBe(240000);
  expect(totalInterest).toBe(40000);
});

test('calculates compound interest', () => {
  const principal = 10000;
  const interestRate = 0.025;
  const compoundRate = 12;
  const numInterestDeposits = 3;
  const { totalAmount, totalInterest } = calcCompoundInterest({
    principal,
    interestRate,
    compoundRate,
    numInterestDeposits,
  });
  expect(Number(totalAmount.toFixed(2))).toBe(10778.0);
  expect(Number(totalInterest.toFixed(2))).toBe(778.0);
});
