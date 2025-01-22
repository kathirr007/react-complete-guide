import { motion, stagger, useAnimate } from 'framer-motion';

import { useContext, useRef, useState } from 'react';
import images from '../assets/images.js';
import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();
  const [scope, animate] = useAnimate();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage
    };

    if (
      !challenge.title.trim()
      || !challenge.description.trim()
      || !challenge.deadline.trim()
      || !challenge.image
    ) {
      animate('input, textarea',
        { x: [-10, 0, 10, 0] },
        { type: 'spring', duration: 0.25, delay: stagger(0.075) }
      );
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
          id="new-challenge-images"
        >
          {images.map(image => (
            <motion.li
              variants={{
                visible: { opacity: 1, scale: 1 }
              }}

              initial={{ opacity: 0, scale: 0.5 }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
              key={image.alt}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleSelectImage(image)}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img alt="" {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
