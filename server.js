const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 8080);

app.use((function (req, res) {
  if (req.get('X-Forwarded-Proto') === 'https' || req.hostname === 'localhost') {
    express.static(__dirname + '/dist/tuscan-frontend')
  } else if (req.get('X-Forwarded-Proto') !== 'https' && req.get('X-Forwarded-Port') !== '443') {
    res.redirect('https://' + req.headers.host + req.url);
  }

}));

// PathLocationStrategy

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/tuscan-frontend/index.html'));
});
