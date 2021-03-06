const express = require('express');
const compression = require('compression');
const httpProxy = require('http-proxy');
const morgan = require('morgan');

require('dotenv').config();

// destructure our params from the .env file
const { PORT, CLIENT_ID, APP_SECRET } = process.env;

// create instance
const app = express();
const proxy = httpProxy.createProxyServer();

// HTTP request logger middleware
app.use(morgan('tiny'));
// Enable gzip
app.use(compression());
// serve static resources from dist folder
app.use(express.static('public'));

// Modify the headers sent to the API
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('Accept', 'application/vnd.github.v3+json');
});

// log errors as JSON message
function errorHandler(err, req, res) {
  res.json({
    error: err.message
  });
}

// handle errors without crashing server
proxy.on('error', function(err, req, res) {
  errorHandler(err, req, res);
});

// Proxy all the api requests
// Accept all api requests until we know required routes
app.all('/api/*', function(req, res) {
  // remove '/api/' from the get request
  const query = req.url.substring(5);
  // check wether to use & or ? before adding auth
  const queryConcat = req.url.indexOf('?') > 0 ? '&' : '?';
  // make sure to pass app info with get request
  const auth = `${queryConcat}client_id=${CLIENT_ID}&client_secret=${APP_SECRET}`;

  proxy.web(req, res, {
    changeOrigin: true, // https request from local
    target: `https://api.github.com/${query}${auth}`
  });
});

// Otherwise serve index.html
app.get('*', function(req, res) {
  res.sendFile('/public/index.html');
});

const port = PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});

// organisations GET /orgs/:org/repos/:page
// users GET /users/:username/repos/:page
// /api/users/octocat/repos
// sort Can be one of created, updated, pushed, full_name. Default: full_name
