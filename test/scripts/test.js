/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const { doesNotMatch } = require('assert');
const assert = require('assert');
const { getOrder } = require('../../scripts/createOrder');
const { createOrder } = require('../../scripts/createOrder');
const { changeOrder } = require('../../scripts/lib/order');

describe('New Test', () => {
  it('create and change order', async () => {
    const test = await changeOrder({ name: 'Alles Neu', price: '9999' });
    console.log('test', test);
    assert.equal(JSON.parse(test), 'something');
  });
});

// describe('Test 1', () => {
//   it('createOrder should create a order', async () => {
//     const test1 = await createOrder({ name: 'test', price: '2999' });
//     assert.equal(test1, '{"orgId":"Hgza28rQ-","name":"test","price":"2999","recipient":"patrick.henn+test@nx-technologies.com"}');
//   });
//   it('createOrder = string', async () => {
//     const test2 = await createOrder({ name: 'test', price: '2999' });
//     assert.equal(typeof JSON.parse(test2), 'object');
//   });
// });

// describe('Test 2', () => {
// it('updateContactperson changes the Contactperson', async () => {
//   const test3 = await changeOrder({ name: 'Probe' });
//   assert.equal(JSON.parse(test3.updateContactperson), {
//     contactperson: 'patrick.henn+updatecontactperson@nx-technologies.com',
//     orgId: 'Hgza28rQ-'
//   });
// });
// it('updateName changes the Name', async (done) => {
//   const test4 = await changeOrder({ name: 'Probe' });
//   // console.log('OOOO', test4.updateName._meta);
//   assert.deepEqual(JSON.parse(test4.updateName), {
//     key: 'order.update.name.success',
//     message: 'Erfolgreich gespeichert'
//   }).catch(done(err));

//   // const test5 = await getOrder({});
//   // console.log('OOOOOOOO');
// });
//   it('add recipient + updatePrice', async () => {
//     const test5 = await changeOrder({ name: 'Probe' });
//     assert.equal(JSON.parse(test5.recipient._meta.key),
//       { key: 'order.recipient.add.success' });
//     console.log('ÖÖÖÖÖ', JSON.parse(test5.recipient._meta.key));
//     assert.equal(test5.updatePrice._meta, '{"price":87654,"assets":[{"label":"string","amount":0}]}');
//     console.log('ÄÄÄÄÄÄ', JSON.parse(test5.updatePrice._meta));
//   });
// });

/* Order erstellen alles änderungen vornehmen (auf erfolgreiche änderung prüfen)
-> mit get die order holen und auf änderungen überprüfen
*/
