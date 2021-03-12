/* eslint-disable no-console */
/* eslint-disable func-names */
require('dotenv').config();
const { get } = require('./request.js');

// user
(async function () {
  const user = await get('user');
  console.log('user', user);
}())
  .catch((err) => console.log('---------ERROR---------', err));
