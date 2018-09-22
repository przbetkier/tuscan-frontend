const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 8080);

app.use((function (req, res, next) {
  if (req.secure) {
    express.static(__dirname + '/dist/tuscan-frontend')
  } else {
    res.redirect('https://' + req.headers.host + req.url);

  }
}));

// PathLocationStrategy

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/tuscan-frontend/index.html'));
});
