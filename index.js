var express = require('express');
var path = require('path');
var app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/will', function (req, res) {
  res.json({ response: "Hello World" });
});

app.get('/ready', function (req, res) {
  res.json({ response: "Great!, It works!" });
});

app.listen(process.env.PORT || 3000);
module.exports = app;
