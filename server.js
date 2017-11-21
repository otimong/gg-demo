var createServer = require('http').createServer;
var next = require('next');
var routes = require('./routes/routes');
var app = next({ dev: process.env.NODE_ENV !== 'production' });
console.log(routes);
var handler = routes.routes.getRequestHandler(app);
var port = parseInt(process.env.PORT, 10) || 3000;
app.prepare().then(function () {
    createServer(handler).listen(port);
});
