import { build } from '../helper';
import { test } from 'tap';

test('example is loaded', async (t) => {
  const app = await build(t);

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

  t.equal(res.payload, 'this is an example');
  t.equal(res2.payload, JSON.stringify({ title: 'Rocky' }));

  t.end();
});
