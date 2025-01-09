import { use, useActionState } from 'react';
import { OpinionsContext } from '../store/opinions-context';
import { Submit } from './Submit';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function userOpinionAction(prevState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const errors = [];

    if (!userName.trim()) {
      errors.push('Please provide user name.');
    }

    if (title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long.');
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push('Opinion must be between 10 to 300 characters long.');
    }

    if (errors.length) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body
        }
      };
    }

    await addOpinion({ title, userName, body });
    return { errors: null };
  }

  const [formState, formAction] = useActionState(userOpinionAction, { errors: null });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        {formState.errors?.length && (
          <ul className="errors">
            {formState.errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
