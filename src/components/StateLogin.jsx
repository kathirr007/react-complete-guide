import { useState } from 'react';

export function StateLogin() {
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  });

  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false
  });

  const isEmailInvalid = isTouched.email && !formInput.email.includes('@');
  const isPasswordInvalid = isTouched.password && formInput.password.length < 6;

  function handleInputChange(identifier, event) {
    setFormInput(prevInputs => ({
      ...prevInputs, [identifier]: event.target.value
    }));

    setIsTouched(prevInputs => ({
      ...prevInputs, [identifier]: false
    }));
  }
  function handleInputBlur(identifier) {
    setIsTouched(prevInputs => ({
      ...prevInputs, [identifier]: true
    }));
  }

  function handleFormReset() {
    setFormInput({
      email: '',
      password: ''
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('formInputs: ', formInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          onBlur={() => handleInputBlur('email')}
          onChange={event => handleInputChange('email', event)}
          value={formInput.email}
          error={isEmailInvalid && 'Please enter a valid email address.'}
        />

        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          onBlur={() => handleInputBlur('password')}
          onChange={event => handleInputChange('password', event)}
          value={formInput.password}
          error={isPasswordInvalid && 'Please enter a password with at-least 6 characters.'}
        />

      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat" onClick={handleFormReset}>Reset</button>
        {/* Buttons inside forms will have default type set to 'submit'. So click event on the button will trigger form submit event */}
        <button type="submit" className="button">Login</button>
        {/* If Buttons type set to anything other than 'submit', then onClick should be bound to button to submit the form */}
        {/* <button type="button" onClick={handleSubmit} className="button">Login</button> */}
      </p>
    </form>
  );
}
