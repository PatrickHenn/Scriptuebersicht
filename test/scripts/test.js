/* eslint-disable no-console */
/* eslint-disable no-undef */
const assert = require('assert');
// const { getOrder } = require('../../scripts/createOrder');
const { createOrder } = require('../../scripts/createOrder');
const { changeOrder } = require('../../scripts/lib/order');

describe('createOrder', () => {
  it('createOrder should create a order', async () => {
    const test1 = await createOrder({ name: 'test', price: '2999' });
    assert.equal(test1, '{"orgId":"Hgza28rQ-","name":"test","price":"2999","recipient":"patrick.henn+test@nx-technologies.com"}');
  });
  it('createOrder = string', async () => {
    const test2 = await createOrder({ name: 'test', price: '2999' });
    assert.equal(typeof test2, 'string');
  });
});

describe('updateContactperson', () => {
  it('updateContactperson changes the Contactperson', async () => {
    const test3 = await changeOrder({ name: 'TEST' });
    assert.equal(test3.updateContactperson, '{"contactperson":"patrick.henn+updatecontactperson@nx-technologies.com","orgId":"Hgza28rQ-"}');
  });
  it('updateName changes the Name', async () => {
    const test4 = await changeOrder({ name: 'TEST' });
    assert.equal(test4.updateName, '{"name":"änderung coding test"}');
  });
});
