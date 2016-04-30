const config          = require('./config')
const express         = require('express')
//const proxy         = require('express-http-proxy')
const httpProxy       = require('http-proxy')

var app = express()
var proxy = httpProxy.createProxyServer({
  autoRewrite: true
})

app.get('/', (req, res) => {
  res.send("What up house.")
})

app.get('/downloads', (req,res) => {
  proxy.web(req, res, { target: 'http://localhost:8080/sabnzbd' })
})

app.listen(config.port, function () {
  console.log('Started on ' + config.port);
});
