import type { InvestmentCalInputs } from '@/util/investment';
import { calculateInvestmentResults, formatter } from '@/util/investment';

export function EstimationResult({ inputs }: { inputs: InvestmentCalInputs }) {
  const estimatedResults = calculateInvestmentResults(inputs);
  const initialInvestment = estimatedResults[0].valueEndOfYear - estimatedResults[0].interest
    - estimatedResults[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {estimatedResults.map((yearData, index) => {
          const totalInterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={`${index}-${yearData.year}`}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>

          );
        })}
      </tbody>
    </table>
  );
}
