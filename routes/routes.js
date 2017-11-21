var nextRoutes = require('next-routes');
export var routes = nextRoutes();
routes.add('listing', '/listing/:id');
routes.add('about', '/about-us/:foo(bar|baz)');
