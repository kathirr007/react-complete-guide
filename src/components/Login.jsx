import { useRef } from 'react';

export function Login() {
  const email = useRef();
  const password = useRef();

  function handleFormReset() {
    email.current.value = '';
    password.current.value = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log('formInputs: ', {
      email: enteredEmail,
      password: enteredPassword
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
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
