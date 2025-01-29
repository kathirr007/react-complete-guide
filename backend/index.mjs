import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', async (req, res, next) => {
  try {
    res.json({ message: 'React router app backend is working fine.' });
  }
  catch (error) {
    next(error);
  }
});

app.use(authRoutes);
app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
