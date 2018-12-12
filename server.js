var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

app.get('/*', (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/')) // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});
