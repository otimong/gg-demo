
const nextRoutes = require('next-routes')
export const routes = nextRoutes()

routes.add('listing', '/listing/:id')
routes.add('about', '/about-us/:foo(bar|baz)')