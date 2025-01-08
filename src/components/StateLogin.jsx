import { hasMinLength, isEmail, isNotEmpty } from '@/util/validation.js';
import { useInput } from '../hooks/useInput';

export function StateLogin() {
  const { value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError: hasEmailError } = useInput('', value => isEmail(value) && isNotEmpty(value));
  const { value: passwordValue, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange, hasError: hasPasswordError } = useInput('', value => hasMinLength(value, 6));

  function handleFormReset() {
    /* setFormInput({
      email: '',
      password: ''
    }); */
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (hasEmailError || hasPasswordError) {
      return;
    }
    console.log('formInputs: ', {
      email: emailValue,
      password: passwordValue
    });
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={hasEmailError && 'Please enter a valid email address.'}
        />

        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={hasPasswordError && 'Please enter a password with at-least 6 characters.'}
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
