import express from 'express';
import path from 'path';

import { port } from '../config';

const app = express();



app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on port:${port}`);
  }
});
