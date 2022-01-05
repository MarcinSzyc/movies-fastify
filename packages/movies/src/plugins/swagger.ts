import fp from 'fastify-plugin';
import { fastifySwagger } from 'fastify-swagger';

export default fp(async (fastify, opts) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/swagger',
    swagger: {
      info: {
        title: 'Movies API',
        description: 'CRUD Notes',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:4000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    exposeRoute: true
  });
});
