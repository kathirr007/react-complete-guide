function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleUserInput(inputIdentifier: keyof typeof userInput, value: number) {
    setUserInput((prevInputs) => {
      return { ...prevInputs, [inputIdentifier]: value };
    });
  }

  const isInputDurationValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      {isInputDurationValid && <EstimationResult inputs={userInput} />}
      {!isInputDurationValid && <p className="center">Please enter the duration greater than zero.</p> }
    </>
  );
}

export default App;
