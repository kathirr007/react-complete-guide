import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '@/util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';

export default function NewEvent() {
  const navigate = useNavigate();

  const { isPending, mutateAsync, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events']
      });
      navigate('/events');
    }
  });

  async function handleSubmit(formData) {
    await mutateAsync({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button text-2xl">
            {isPending ? 'Submitting...' : 'Create'}
          </button>
        </>
      </EventForm>
      {
        isError && (
          <ErrorBlock title="Failed to create event" message={error.info?.message || 'Failed to create event, please check your inputs and try again later.'} />
        )
      }
    </Modal>
  );
}
