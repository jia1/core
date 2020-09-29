import nerdamer from 'nerdamer/nerdamer.core';
import Algebra from 'nerdamer/Algebra';
import Calculus from 'nerdamer/Calculus';
import Solve from 'nerdamer/Solve';

const totalMonthsPerYear = 12;

export const calcCompoundInterest = ({
  principal,
  interestRatePerAnnum,
  compoundRatePerAnnum = 1,
  totalMonths,
}) => {
  const totalAmount = solveForOneUnknownVariable(
    'a=p*(1+(r/n))^(n*t)',
    {
      p: principal.toString(),
      r: (interestRatePerAnnum / totalMonthsPerYear).toString(),
      n: compoundRatePerAnnum.toString(),
      t: totalMonths.toString(),
    },
    'a',
    principal,
  );
  return {
    totalAmount,
    totalInterest: totalAmount - principal,
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
      r: (interestRatePerAnnum / totalMonthsPerYear).toString(),
      t: totalMonths.toString(),
    },
    'a',
    principal,
  );
  return {
    totalAmount,
    totalInterest: totalAmount - principal,
  };
};

const solveForOneUnknownVariable = (
  equationString,
  knownValues,
  unknownVariable,
  defaultValue,
) => {
  const equation = nerdamer(equationString).evaluate(knownValues);
  const solution = equation.solveFor(unknownVariable);
  return Number(solution.text());
};
