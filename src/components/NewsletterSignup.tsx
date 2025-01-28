import { useFetcher } from 'react-router';
import { toast } from 'react-toastify';
import classes from './NewsletterSignup.module.css';

function Msg({ data }: Readonly<{ data: { title: string; message: string } }>) {
  return (
    <div>
      <h3 style={{margin:0}}>{data.title}</h3>
      {data.message}
    </div>
  );
}

function NewsletterSignup() {
  const fetcher = useFetcher();

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      toast(Msg,
        {
          data: {
            title: 'Success!',
            message: data.message
          }
        }
      );
    }
  }, [data, state]);

  return (
    <fetcher.Form action="/newsletter" method="post" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button type="submit">Sign up</button>
    </fetcher.Form>
  );
}

export { NewsletterSignup };
