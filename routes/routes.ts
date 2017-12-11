
const nextRoutes = require('next-routes')
const route = module.exports = nextRoutes()

route.add('listing', '/listing/:id/:slug')
route.add('category', '/category')
route.add('about', '/about-us/:foo(bar|baz)')
