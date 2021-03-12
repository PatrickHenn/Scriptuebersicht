/* eslint-disable func-names */
/* eslint-disable no-console */
require('dotenv').config();
const { post, get, orgaId } = require('./request.js');

// const orderId = {};

// organisation
(async function () {
  const getOrganisation = await get('organization/');
  console.log('getOrganisation', getOrganisation);

  const getOrgaId = await get(`organization/${orgaId}`);
  console.log('getorgaId', getOrgaId);

  const postOrganisation = await post('organization',
    {
      name: 'Test Autohaus Schnee',
      nick: 'Code',
      contact: {
        email: 'patrick.henn+66@nx-technologies.com',
        street: 'Blzardusstraße',
        streetnumber: '66',
        zip: 'string',
        city: 'Dalaran',
      },
      paymentoptions: {
        cash: true,
        sepa: true,
        fts: true,
      },
    });
  console.log('postOrganisation', postOrganisation);
}())
  .catch((err) => console.log('---------ERROR---------', err));
