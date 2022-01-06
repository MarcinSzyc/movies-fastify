import fp from 'fastify-plugin';
import fastifyJwt from 'fastify-jwt';

export default fp(async (fastify) => {
  fastify.register(fastifyJwt, {
    secret: 'devSecret'
  });
});
