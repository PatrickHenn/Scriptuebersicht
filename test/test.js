const assert = require('assert');
const { getOrder } = require('../scripts/createOrder');
const { createOrder } = require('../scripts/createOrder');

// eslint-disable-next-line no-undef
describe('createOrder', () => {
  // eslint-disable-next-line no-undef
  it('pls send water', async () => {
    const test = await createOrder({ name: 'etwas1', price: '2999' });
    // eslint-disable-next-line no-console
    console.log(test);
    const get = await getOrder();
    // eslint-disable-next-line no-console
    console.log(get);
    assert.equal(getOrder[0].lastId, 'etwas1');
  });
});

// describe('test',() => {
//     it.only('pls send help', async () => {
//         const test = await getOrder();
//         console.log(test)
//         assert.equal(typeof test,'array')
//     });
// });
