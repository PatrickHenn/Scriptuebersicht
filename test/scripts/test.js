/* eslint-disable no-console */
/* eslint-disable no-undef */
const assert = require('assert');
// const { getOrder } = require('../../scripts/createOrder');
const { createOrder } = require('../../scripts/createOrder');
const { changeOrder } = require('../../scripts/lib/order');

describe('Test 1', () => {
  it('createOrder should create a order', async () => {
    const test1 = await createOrder({ name: 'test', price: '2999' });
    assert.equal(test1, '{"orgId":"Hgza28rQ-","name":"test","price":"2999","recipient":"patrick.henn+test@nx-technologies.com"}');
  });
  it('createOrder = string', async () => {
    const test2 = await createOrder({ name: 'test', price: '2999' });
    assert.equal(typeof JSON.parse(test2), 'object');
  });
});

describe('Test 2', () => {
  it('updateContactperson changes the Contactperson', async () => {
    const test3 = await changeOrder({ name: 'TEST' });
    console.log('erereere', JSON.parse(test3.updateContactperson));
    assert.equal(JSON.parse(test3.updateContactperson), {
      contactperson: 'patrick.henn+updatecontactperson@nx-technologies.com',
      orgId: 'Hgza28rQ-',
    });
  });
  it('updateName changes the Name', async () => {
    const test4 = await changeOrder({ name: 'TEST' });
    assert.equal(test4.updateName, '{"name":"änderung coding test"}');
  });
  it('add recipient + updatePrice', async () => {
    const test5 = await changeOrder({ name: 'TEST' });
    assert.equal(test5.recipient, '{"recipient":{"email":"patrick.henn+codingRecipient@nx-technologies.com"}}');
    assert.equal(test5.updatePrice, '{"price":87654,"assets":[{"label":"string","amount":0}]}');
  });
});
