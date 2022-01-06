import { FastifyPluginAsync, FastifyRequest } from 'fastify';

const movies: FastifyPluginAsync = async (fastify): Promise<void> => {
  const opts = {
    schema: {
      body: {
        type: 'object',
        required: ['title'],
        properties: {
          title: { type: 'string' }
        }
      }
    }
  };

  fastify.get('/', async function (request: FastifyRequest, reply) {
    try {
      await request.jwtVerify();
      return 'this is an GET example';
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.post('/', opts, async function (request, reply) {
    try {
      await request.jwtVerify();
      return 'this is an POST example';
    } catch (error) {
      reply.send(error);
    }
    return request.body;
  });
};

export default movies;
