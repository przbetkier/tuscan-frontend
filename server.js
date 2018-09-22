const express = require('express');
const forceSsl = require('force-ssl-heroku');
const app = express();
const path = require('path');

app.use(forceSsl);

app.listen(process.env.PORT || 8080);

app.use(express.static(__dirname + '/dist/tuscan-frontend'));

// PathLocationStrategy

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/tuscan-frontend/index.html'));
});
