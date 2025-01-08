import { useActionState, useState } from 'react';
import { hasMinLength, isEmail, isEqualsToOtherValue, isNotEmpty } from '../util/validation';

export function Signup() {
  const [errors, setErrors] = useState({});
  function signupAction(prevState, formData) {
    const acquisitionChannel = formData.getAll('acquisition');
    const data = Object.fromEntries(formData.entries());
    data.acquisition = acquisitionChannel;

    const { email, password, role, acquisition, terms } = data;
    const confirmPassword = data['confirm-password'];
    const firstName = data['first-name'];
    const lastName = data['last-name'];

    if (!isNotEmpty(email) || !isEmail(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Please enter valid email address' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, email: null }));
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Please enter a password at-least 6 characters.' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, password: null }));
    }

    if (!isEqualsToOtherValue(password, confirmPassword)) {
      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords does not match.' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: null }));
    }

    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      setErrors(prevErrors => ({ ...prevErrors, userName: 'Please provide both first and last name.' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, userName: null }));
    }

    if (!isNotEmpty(role)) {
      setErrors(prevErrors => ({ ...prevErrors, role: 'Please select a role.' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, role: null }));
    }

    if (!terms) {
      setErrors(prevErrors => ({ ...prevErrors, terms: 'You must agree the terms and conditions.' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, terms: null }));
    }

    if (acquisitionChannel.length === 0) {
      setErrors(prevErrors => ({ ...prevErrors, acquisition: 'Please select at least one acquisition channel.' }));
    }
    else {
      setErrors(prevErrors => ({ ...prevErrors, acquisition: null }));
    }

    if (Object.entries(errors).length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          role,
          acquisition,
          acquisitionChannel,
          terms
        }
      };
    }

    setErrors({ errors: null });

    return { errors: null };

    // console.log(data);
  }

  const [formState, formAction] = useActionState(signupAction, { errors: null });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      {/* <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required defaultValue={formState.enteredValues?.email} />
      </div> */}

      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        defaultValue={formState.enteredValues?.email}
        error={errors?.email}
      />

      <div className="control-row">
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"

          defaultValue={formState.enteredValues?.password}
          error={errors?.password}
        />
        {/* <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required defaultValue={formState.enteredValues?.password} />
        </div> */}

        <Input
          label="Confirm Password"
          id="confirm-password"
          type="password"
          name="confirm-password"

          defaultValue={formState.enteredValues?.confirmPassword}
          error={errors?.confirmPassword}
        />

        {/* <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            defaultValue={formState.enteredValues?.confirmPassword}
          />
          <div className="control-error">
            {passwordsNotEqual && <p>Confirm password should match the entered password.</p>}
          </div>
        </div> */}
      </div>

      <hr />

      <div className="control-row">
        <Input
          label="First Name"
          id="first-name"
          type="text"
          name="first-name"

          defaultValue={formState.enteredValues?.firstName}
          error={errors?.userName}
        />
        {/* <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div> */}

        <Input
          label="Last Name"
          id="last-name"
          type="text"
          name="last-name"
          defaultValue={formState.enteredValues?.lastName}
          error={errors?.userName}
        />

        {/* <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div> */}

      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
        <div className="control-error">
          {errors?.role && <p>{errors.role}</p>}
        </div>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues.acquisitionChannel?.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues.acquisitionChannel?.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState.enteredValues.acquisitionChannel?.includes('other')} />
          <label htmlFor="other">Other</label>
        </div>
        <div className="control-error">
          {errors?.acquisition && <p>{errors.acquisition}</p>}
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={formState.enteredValues?.terms} />
          {' '}
          I agree to the terms and conditions
        </label>
      </div>
      <div className="control-error">
        {errors?.terms && <p>{errors.terms}</p>}
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
