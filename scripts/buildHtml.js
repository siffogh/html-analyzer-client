import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  console.log($('head').html());

  return fs.writeFile('dist/index.html', $.html(), 'utf8', (e) => {
    if (e) { return console.log(e); }

    return console.log('index.html built in /dist'.green);
  });
});
