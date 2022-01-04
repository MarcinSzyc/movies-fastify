import { FastifyPluginAsync } from 'fastify';

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

  fastify.get('/', async function (request, reply) {
    return 'this is an example';
  });

  fastify.post('/', opts, async function (request, reply) {
    return request.body;
  });
};

export default movies;
