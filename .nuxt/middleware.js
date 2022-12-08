const middleware = {}

middleware['layout-middleware'] = require('..\\middleware\\layout-middleware.js')
middleware['layout-middleware'] = middleware['layout-middleware'].default || middleware['layout-middleware']

export default middleware
