import fs from 'node:fs/promises';
import path from 'node:path';

const __currentDirname = path.resolve();

async function readData() {
  const data = await fs.readFile(path.join(__currentDirname, 'events.json'), 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile(path.join(__currentDirname, 'events.json'), JSON.stringify(data));
}

export { readData, writeData };
