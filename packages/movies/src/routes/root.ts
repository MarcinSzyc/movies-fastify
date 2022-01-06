import { FastifyPluginAsync, FastifyReply } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply: FastifyReply) {
    try {
      await request.jwtVerify();
      return { root: true };
    } catch (error) {
      reply.send(error);
    }
  });
};

export default root;
