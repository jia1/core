import nerdamer from 'nerdamer/nerdamer.core';
import Algebra from 'nerdamer/Algebra';
import Calculus from 'nerdamer/Calculus';
import Solve from 'nerdamer/Solve';

export const calcCompoundInterest = ({
  principal,
  interestRate,
  compoundRate = 1,
  numInterestDeposits,
}) => {
  const totalAmount = solveForOneUnknownVariable(
    'a=p*(1+(r/n))^(n*t)',
    {
      p: principal.toString(),
      r: interestRate.toString(),
      n: compoundRate.toString(),
      t: numInterestDeposits.toString(),
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
  interestRate,
  numInterestDeposits,
}) => {
  const totalAmount = solveForOneUnknownVariable(
    'a=p+p*r*t',
    {
      p: principal.toString(),
      r: interestRate.toString(),
      t: numInterestDeposits.toString(),
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
