var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
  server.use('*', express.static('client/build')); // Added this
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
app.listen(process.env.PORT || 8080);
