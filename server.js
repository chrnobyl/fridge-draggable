var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.use('*', express.static('client/build')); // Added this
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || 8080);
