import logo from '../assets/investment-calculator-logo.png';

export function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo of money bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
