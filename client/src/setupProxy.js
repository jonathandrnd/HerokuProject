const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:3001/' }))
}
module.exports = function(app) {
  app.use(proxy('/books', { target: 'http://localhost:3001/' }))
}