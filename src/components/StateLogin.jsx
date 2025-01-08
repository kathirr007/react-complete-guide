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

  const isEmailValid = isTouched.email && !formInput.email.includes('@');

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={event => handleInputChange('email', event)} value={formInput.email} />
          <div className="control-error">
            {isEmailValid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onBlur={() => handleInputBlur('password')} onChange={event => handleInputChange('password', event)} value={formInput.password} />
        </div>
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
