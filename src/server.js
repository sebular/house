const path            = require('path')
const config          = require('./config')
const bodyParser      = require('body-parser')
const express         = require('express')
const httpProxy       = require('http-proxy')
const vidStreamer     = require('vid-streamer')

const app = express()

var proxy = httpProxy.createProxyServer({
  xfwd: true,
})

const streamerOptions = {
  "mode": "development",
  "forceDownload": false,
  "random": false,
  "rootFolder": "/home/sebastian/house/src/downloads/",
  "rootPath": "",
  "server": "VidStreamer.js/0.1.4"
}

app.use('/sabnzbd/', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8080/' })
})

//app.use('/downloads/', vidStreamer.settings(streamerOptions))

//require('node-jsx').install()

// Include static assets. Not advised for production
//app.use(express.static(path.join(__dirname, 'public')));
// Set view path
//app.set('views', path.join(__dirname, 'views'));

app.use('/downloads', express.static(__dirname + '/downloads'))

app.use('/', express.static(__dirname + '/public'))

app.listen(config.port, '127.0.0.1', function () {
  console.log('Started on ' + config.port);
});
