import { FastifyPluginAsync } from "fastify"

const movies: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })

  fastify.post('/', async function (request, reply) {
    return 'this is an example POST '
  })
}

export default movies;
