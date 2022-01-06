import { test } from 'tap';
import { build } from '../helper';

test('root endpoint successfull', async (t) => {
  const app = await build(t);

  const payload = {
    username: 'test',
    password: 'test'
  };

  const token = app.jwt.sign({ payload });

  const res = await app.inject({
    url: '/',
    headers: {
      authorization: 'Bearer ' + token
    }
  });
  t.same(JSON.parse(res.payload), { root: true });
});

test('root endpoint not authorized', async (t) => {
  const app = await build(t);

  const expectedResult = JSON.stringify({
    statusCode: 401,
    error: 'Unauthorized',
    message: 'No Authorization was found in request.headers'
  });

  const res = await app.inject({
    url: '/'
  });
  t.same(res.payload, expectedResult);
});
