const express = require('express');
const app = express();

const htmlcontent = `<!DOCTYPE html>
<html lang='en-AU'>
  <head>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width' />
    <title>Welcome!</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>Welcome to my simple html page!</p>
  </body>
</html>`;

app.get('/', function(req, res) {
    res.send(htmlcontent);
})

app.listen(3000)