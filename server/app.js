import express from 'express';
import webpack from 'webpack';
import cors from 'cors';
import path from 'path';

import { port } from '../../config';
import config from '../webpack.config.dev';


const app = express();
const compiler = webpack(config);


app.use(cors());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on port:${port}`);
  }
});
