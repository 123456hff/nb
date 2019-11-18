const proxy = require('http-proxy-middleware')
module.exports = function ( app ) {
  app.use(proxy(
    '/qinqin.json',{
      target: 'http://localhost:3000',
      changeOrigin: true 
    }
  ))
}