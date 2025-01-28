import { Link } from 'react-router';
import classes from './EventItem.module.css';

function EventItem({ event }: Readonly<{ event: any }>) {
  function startDeleteHandler() {
    // ...
  }

  const navigate = useNavigate();
  function goBack() {
    navigate('/events');
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
        <Link to="edit">Edit</Link>
        <button type="button" onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export { EventItem };
