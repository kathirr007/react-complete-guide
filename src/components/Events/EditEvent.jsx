import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

import { useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EditEvent() {
  const params = useParams();
  const submit = useSubmit();

  const navigate = useNavigate();
  const { state } = useNavigation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 5000
  });

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: updateEvent,
  //   /* onSuccess() {
  //     queryClient.invalidateQueries({
  //       queryKey: ['events'],
  //       refetchType: 'none'
  //     });
  //     navigate('/events');
  //   } */
  //   /* Optimistic updating */
  //   onMutate: async (data) => {
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ['events', params.id] });

  //     const prevEvent = queryClient.getQueryData(['events', params.id]);
  //     queryClient.setQueryData(['events', params.id], newEvent);

  //     return { prevEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['events', params.id], context.prevEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: ['events', params.id] });
  //   }
  //   /* Optimistic updating ends */
  // });

  async function handleSubmit(formData) {
    /* mutateAsync({ id: params.id, event: formData });
    navigate('../'); */
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isLoading) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock title="Failed to load event." message={error.info?.message || 'Failed to load event, please try again later.'} />
        <div className="form-actions">
          <Link to="../" className="button">Okay</Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          {(state === 'submitting') ? 'Updating...' : 'Update'}
        </button>
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries({ queryKey: ['events'] });
  return redirect('../');
}
