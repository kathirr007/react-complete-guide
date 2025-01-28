const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const eventRoutes = require('./routes/events');

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

app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message });
});

app.listen(PORT);

module.exports = app;