import classes from './Notification.module.css';

function Notification(props: any) {
  let specialClasses = '';
  const { status, title, message } = props;

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}

export { Notification };
