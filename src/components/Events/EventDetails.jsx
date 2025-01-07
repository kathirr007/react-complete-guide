import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@tanstack/react-query';
import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });

  const { mutateAsync, isPending, isError: isErrorDeleting, error: errorDelete } = useMutation({
    mutationFn: deleteEvent,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none'
      });
      navigate('../');
    }
  });

  async function handleConfirmDelete() {
    await mutateAsync({ id: params.id });
  }

  function handlePrepareDelete() {
    setShowConfirmDialog(true);
  }

  function handleCloseConfirmDialog() {
    setShowConfirmDialog(false);
  }

  let content;

  if (isLoading) {
    content = (
      <div id="event-details-container" className="center">
        <p>Fetching event details data...</p>
      </div>
    );
  }

  if (isError) {
    content = <ErrorBlock title="Failed to load event." message={error.info?.message || 'Please try again later.'} />;
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button type="button" onClick={handlePrepareDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3010/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime="Todo-DateT$Todo-Time">
                {formattedDate}
                {' '}
                @
                {' '}
                {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      {
        showConfirmDialog && (
          <Modal onClose={handleCloseConfirmDialog}>
            <h2>Are you sure?</h2>
            <p>Do you really want to delete this event? This action can not be undone.</p>
            <div className="form-actions">
              <button onClick={handleCloseConfirmDialog} type="button" className="button-text">Cancel</button>
              <button onClick={handleConfirmDelete} type="button" className="button">
                {
                `${isPending ? 'Deleting...' : 'Delete'}`
                }
              </button>
            </div>
            {isErrorDeleting && <ErrorBlock title="Failed to delete the event." message={errorDelete.info?.message || 'Failed to delete the event. Please try again later.'} />}
          </Modal>
        )
      }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">

        {content}
      </article>
    </>
  );
}
