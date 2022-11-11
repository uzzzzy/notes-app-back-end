const Hapi = require('@hapi/hapi');
const routes = require('./start/routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        // allow any origin
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};

init();
