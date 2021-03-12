/* eslint-disable no-console */
/* eslint-disable func-names */
require('dotenv').config();
const {
  post, get, del, orgaId,
} = require('../../../Request-Promise-Native/lib/request.js');

const id = '';
// webhook
(async function () {
  const createWebhook = await post(`webhook?orgId=${orgaId}`,
    {
      orgaId,
      url: `https://api.dev.nx.bezahl.de/nxt/v1/webhook?orgId=${orgaId}`,
      secret: 'string',
    });

  const getWebhook = await get(`webhook?orgId=${orgaId}`);

  const delWebhook = await del(`webhook?orgId=${orgaId}`,
    {
      orgaId,
      id,
    }).catch((err) => console.log('---------ERROR-DEL---------', err.error, 'statusCode:', err.statusCode));
  module.exports = { createWebhook, getWebhook, delWebhook };
}());
