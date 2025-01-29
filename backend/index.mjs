import fs from 'node:fs/promises';
import path from 'node:path';
import cors from 'cors';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3010;
const __currentDirname = path.resolve();

async function loadOpinions() {
  try {
    const dbFileData = await fs.readFile(path.join(__currentDirname, './db.json'));
    const parsedData = JSON.parse(dbFileData);
    return parsedData.opinions;
  }
  catch (error) {
    return [];
  }
}

async function saveOpinion(opinion) {
  const opinions = await loadOpinions();
  const newOpinion = { id: new Date().getTime(), votes: 0, ...opinion };
  opinions.unshift(newOpinion);
  const dataToSave = { opinions };
  await fs.writeFile(path.join(__currentDirname, './db.json'), JSON.stringify(dataToSave, null, 2));
  return newOpinion;
}

async function upvoteOpinion(id) {
  const opinions = await loadOpinions();
  const opinion = opinions.find(o => o.id === id);
  if (!opinion) {
    return null;
  }
  opinion.votes++;
  await fs.writeFile(path.join(__currentDirname, './db.json'), JSON.stringify({ opinions }, null, 2));
  return opinion;
}

async function downvoteOpinion(id) {
  const opinions = await loadOpinions();
  const opinion = opinions.find(o => o.id === id);
  if (!opinion) {
    return null;
  }
  opinion.votes--;
  await fs.writeFile(path.join(__currentDirname, './db.json'), JSON.stringify({ opinions }, null, 2));
  return opinion;
}

app.use(cors());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.json({ message: 'React Forms Opinions api working fine.' });
  }
  catch (error) {
    res.status(500).json({ error: 'Error loading opinions.' });
  }
});
app.get('/opinions', async (req, res) => {
  try {
    const opinions = await loadOpinions();
    res.json(opinions);
  }
  catch (error) {
    res.status(500).json({ error: 'Error loading opinions.' });
  }
});

app.post('/opinions', async (req, res) => {
  const { userName, title, body } = req.body;

  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!userName || !title || !body) {
    return res
      .status(400)
      .json({ error: 'User name, title and opinion body are required.' });
  }
  try {
    const newOpinion = await saveOpinion({ userName, title, body });
    res.status(201).json(newOpinion);
  }
  catch (error) {
    res.status(500).json({ error: 'Error saving opinion.' });
  }
});

app.post('/opinions/:id/upvote', async (req, res) => {
  const { id } = req.params;
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const opinion = await upvoteOpinion(Number(id));
    if (!opinion) {
      return res.status(404).json({ error: 'Opinion not found.' });
    }
    res.json(opinion);
  }
  catch (error) {
    res.status(500).json({ error: 'Error upvoting opinion.' });
  }
});

app.post('/opinions/:id/downvote', async (req, res) => {
  const { id } = req.params;
  await new Promise(resolve => setTimeout(resolve, 1000));
  try {
    const opinion = await downvoteOpinion(Number(id));
    if (!opinion) {
      return res.status(404).json({ error: 'Opinion not found.' });
    }
    res.json(opinion);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error downvoting opinion.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
