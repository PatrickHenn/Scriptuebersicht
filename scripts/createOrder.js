require('dotenv').config();
// const request = require('request-promise-native');
const { post, get, orgaId } = require('./lib/request.js');

async function createOrder(test) {
  const create = await post('order/',
    {
      orgId: `${orgaId}`,
      name: test.name,
      price: test.price,
      recipient: 'patrick.henn+test@nx-technologies.com',
    });
  return create;
}
async function getOrder() {
  const order = await get(`order/?orgId=${orgaId}`);
  const obj = order.list.map((X) => {
    const data = {
      lastId: X.id,
      lastName: X.name,
      lastPrice: X.total,
      lastRecipient: X.recipient.length ? X.recipient[0].email : '',
    };
    return data;
  });
  return obj;
}

module.exports = { createOrder, getOrder };
