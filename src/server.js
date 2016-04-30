const express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.send("What up house.")
})

app.listen(1234, function () {
  console.log('Started on 3000');
});
