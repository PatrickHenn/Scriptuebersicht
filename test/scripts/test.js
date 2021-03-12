/* eslint-disable no-console */
/* eslint-disable no-undef */
const assert = require('assert');
// const { getOrder } = require('../../scripts/createOrder');
const { createOrder } = require('../../scripts/createOrder');
const { changeOrder, updateContactperson } = require('../../scripts/lib/order');

describe('createOrder', () => {
  it('createOrder should create a order', async () => {
    const test = await createOrder({ name: 'test', price: '2999' });
    assert.equal(test, '{"orgId":"Hgza28rQ-","name":"test","price":"2999","recipient":"patrick.henn+test@nx-technologies.com"}');
    await console.log('TEST', createOrder);
  });
  it('createOrder = string', async () => {
    const test = await createOrder({ name: 'test', price: '2999' });
    assert.equal(typeof test, 'string');
  });
});

describe('updateContactperson', () => {
  it('updateContactperson changes the Contactperson', async () => {
    const test1 = await changeOrder({ name: 'TEST' });
    console.log('TEST1', test1);
    assert.equal(test1, '{"contactperson":"patrick.henn+updatecontactperson@nx-technologies.com","orgId":"Hgza28rQ-"}');
  });
});
