const { createServer } = require('http')
const next = require('next');
const routes = require('./routes/routes');
const app = next({ dev: process.env.NODE_ENV !== 'production', dir: './' });

const handler = routes.routes.getRequestHandler(app);

const port = parseInt(process.env.PORT, 10) || 3002

app.prepare().then(() => {
    const server = createServer(handler)
    server.listen(port)
    console.log(`Listening on port ${port}`)
})