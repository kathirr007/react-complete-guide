import { Link, useSubmit } from 'react-router';
import classes from './EventItem.module.css';

function EventItem({ event }: Readonly<{ event: any }>) {
  const submit = useSubmit();

  function startDeleteHandler() {
    // eslint-disable-next-line no-alert
    const proceed = confirm('Are you sure to delete the event?');

    if (proceed) {
      submit(null, { method: 'DELETE' });
    }
  }

  const navigate = useNavigate();
  function goBack() {
    navigate('/events');
  }

  function goToEdit() {
    navigate('edit');
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <button type="button" onClick={goBack}>
          Back
        </button>
        <button type="button" onClick={goToEdit}>
          {/* <Link to="edit">Edit</Link> */}
          Edit
        </button>
        <button type="button" onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export { EventItem };
