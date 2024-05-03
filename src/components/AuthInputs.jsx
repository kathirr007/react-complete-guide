import { useState } from 'react';
import { styled } from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ $invalid }) => $invalid ? '#f87171' : '#6b7280'};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  color: #374151;
  background-color: #d1d5db;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  color: ${({ $invalid }) => $invalid ? '#ef4444' : '#374151'};
  background-color: ${({ $invalid }) => $invalid ? '#fed2d2' : '#d1d5db'};
  border-color: ${({ $invalid }) => $invalid ? '#f73f3f' : 'transparent'};
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    }
    else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            className={emailNotValid ? 'invalid' : undefined}
            onChange={event => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            $invalid={passwordNotValid}
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={event =>
              handleInputChange('password', event.target.value)}
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
