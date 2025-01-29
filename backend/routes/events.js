import app from 'express';

import { add, get, getAll, remove, replace } from '../data/event.js';
import {
  isValidDate, isValidImageUrl, isValidText
} from '../util/validation.js';

const router = app.Router();

router.get('/', async (req, res, next) => {
  try {
    const events = await getAll();
    res.json({ events });
  }
  catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const event = await get(req.params.id);
    res.json({ event });
  }
  catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body;

  const errors = {};

  if (!isValidText(data.title)) {
    errors.title = 'Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Adding the event failed due to validation errors.',
      errors
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: 'Event saved.', event: data });
  }
  catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const data = req.body;

  const errors = {};

  if (!isValidText(data.title)) {
    errors.title = 'Invalid title.';
  }

  if (!isValidText(data.description)) {
    errors.description = 'Invalid description.';
  }

  if (!isValidDate(data.date)) {
    errors.date = 'Invalid date.';
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = 'Invalid image.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'Updating the event failed due to validation errors.',
      errors
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: 'Event updated.', event: data });
  }
  catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: 'Event deleted.' });
  }
  catch (error) {
    next(error);
  }
});

export default router;
