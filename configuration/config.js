var config = {
  serverPort                  : process.env.PORT || 3000,
  swaggerRouterOptions        : {
    swaggerUi                 : '/swagger.json',
    controllers               : './controllers',
    useStubs                  : process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
  }};
module.exports = config;
