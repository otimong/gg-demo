const { createServer } = require('http')
const next = require('next');
const routes = require('./routes/routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
console.log(routes)


const handler = routes.routes.getRequestHandler(app);

const port = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
    createServer(handler).listen(port)
})