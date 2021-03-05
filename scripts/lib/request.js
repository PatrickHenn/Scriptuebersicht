const request = require('request-promise-native');
require('dotenv').config();

const option = {
  headers: {
    'Content-Type': 'application/json',
    'NX-Token': '',
  },
  json: true,
};

let endpoint = '';
let orgaId = '';

if (process.env.STACK === 'dev') {
  endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
  orgaId = process.env.ODEV;
  option.headers['NX-Token'] = process.env.DEV;
  // console.log('after:', { endpoint }, 'orgaId', { orgaId }, 'token', option.headers['NX-Token']);
}

if (process.env.STACK === 'int') {
  endpoint = 'https://api.int.nx.bezahl.de/nxt/v1/';
  orgaId = 'TqUnGlyJc';
  option.headers['NX-Token'] = process.env.INT;
  // console.log('after:', { endpoint }, 'orgaId', { orgaId }, 'token', option.headers['NX-Token']);
}

if (process.env.STACK === 'test') {
  endpoint = 'https://api.test.nx.bezahl.de/nxt/v1/';
  orgaId = 'TpQlrB3-F';
  option.headers['NX-Token'] = process.env.TEST;
  // console.log('after:',{endpoint},'orgaId',{orgaId},'token',option.headers['NX-Token']);
}

async function get(uri) {
  // console.log('get', endpoint, uri);
  return request({
    method: 'GET',
    ...option,
    uri: `${endpoint}${uri}`,
  });
}

async function post(uri, _body) {
  // console.log('post',uri,_body);
  const { body } = request({
    method: 'POST',
    ...option,
    uri: `${endpoint}${uri}`,
    body: _body,
  });
  return body;
}

module.exports = { get, post, orgaId };
