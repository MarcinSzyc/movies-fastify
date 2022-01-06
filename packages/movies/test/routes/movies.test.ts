import { build } from '../helper';
import { test } from 'tap';

test('movies success', async (t) => {
  const app = await build(t);

  const payload = {
    username: 'test',
    password: 'test'
  };

  const token = app.jwt.sign({ payload });

  const res = await app.inject({
    url: '/movies',
    headers: {
      authorization: 'Bearer ' + token
    }
  });

  const res2 = await app.inject({
    url: '/movies',
    method: 'POST',
    payload: {
      title: 'Rocky'
    },
    headers: {
      authorization: 'Bearer ' + token
    }
  });

  t.equal(res.payload, 'this is GET example');
  t.equal(res2.payload, 'this is POST example');
});

test('no authorization', async (t) => {
  const app = await build(t);

  const expectedResult = JSON.stringify({
    statusCode: 401,
    error: 'Unauthorized',
    message: 'No Authorization was found in request.headers'
  });

  const res = await app.inject({
    url: '/movies'
  });

  const res2 = await app.inject({
    url: '/movies',
    method: 'POST',
    payload: {
      title: 'Rocky'
    }
  });

  t.equal(res.payload, expectedResult);
  t.equal(res2.payload, expectedResult);
});
