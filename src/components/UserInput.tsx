import type { InvestmentCalInputs } from '@/util/investment';

export function UserInput({ userInput, onChange }: { userInput: InvestmentCalInputs; onChange: Function }) {
  // const [initialInvestment, setInitialInvestment] = useState(0);
  // const [annualInvestment, setAnnualInvestment] = useState(0);
  // const [expectedReturn, setExpectedReturn] = useState(0);
  // const [duration, setDuration] = useState(0);

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input id="initialInvestment" type="number" value={userInput.initialInvestment} onInput={e => onChange('initialInvestment', +(e.target as HTMLInputElement).value)} />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input id="annualInvestment" type="number"value={userInput.annualInvestment} onInput={e => onChange('annualInvestment', +(e.target as HTMLInputElement).value)} />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input id="expectedReturn" type="number"value={userInput.expectedReturn} onInput={e => onChange('expectedReturn', +(e.target as HTMLInputElement).value)} />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number"value={userInput.duration} onInput={e => onChange('duration', +(e.target as HTMLInputElement).value)} />
        </div>
      </div>
    </section>
  );
}
