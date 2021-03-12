/* eslint-disable no-console */
/* eslint-disable no-undef */
const assert = require('assert');
// const { getOrder } = require('../../scripts/createOrder');
const { createOrder } = require('../../scripts/createOrder');

(async () => {
  const updateName = await post(`order/${orderId}/update/name`,
    {
      name: 'änderung coding test',
    });
  console.log('updateName', updateName);
})();

describe('createOrder', () => {
  it('createOrder should create a order', async () => {
    const test = await createOrder({ name: 'test', price: '2999' });
    assert.equal(test, '{"orgId":"Hgza28rQ-","name":"test","price":"2999","recipient":"patrick.henn+test@nx-technologies.com"}');
    await console.log('TEST', createOrder);
  });
  it('createOrder should create a order', async () => {
    const test = await createOrder({ name: 'test', price: '2999' });
    assert.equal(typeof test, 'string');
  });
});

describe('updateName', () => {
  it('updateName change the name', async () => {
    const test = await updateName({ name: 'TEST' });
    assert.equal(test, '{"orgId":"Hgza28rQ-","name":"TEST","price":"2999","recipient":"patrick.henn+test@nx-technologies.com"}');
    await console.log('TEST', createOrder);
  });
});
