import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router';

import { toast } from 'react-toastify';
import classes from './AuthForm.module.css';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  const data = useActionData();

  const isSubmitting = useNavigation().state === 'submitting';

  useEffect(() => {
    if (data && data.errors) {
      toast.error(ToastMessage,
        {
          data: {
            title: 'Auth Error..!',
            message: 'Something went wrong, please check invalid inputs.'
          }
        }
      );
    }
    else if (data && data.message) {
      toast(ToastMessage,
        {
          data: {
            title: 'Success!',
            message: data.message
          }
        }
      );
    }
  }, [data]);

  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
      {data && data.errors && (
        <ul className="form-errors">
          {Object.values(data.errors).map((error: any) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      {data && !data.errors && data.message && (
        <p>
          {data.message}
        </p>
      )}
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
        <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Submitting..' : 'Save'}</button>
      </div>
    </Form>
  );
}

export { AuthForm };
