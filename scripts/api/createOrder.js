require('dotenv').config();
const { response } = require('express')
const request = require('request-promise-native');
// const {post,get,orgaId} = require("./../../lib/request.js");
let orderId = 'doffmPY05';
let orgaId = 'Hgza28rQ-';


let option = {
  headers: {
      'Content-Type' : 'application/json',
      'NX-Token' : '',
  },
  json: true
};

let endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';

if (process.env.STACK === 'dev'){
  endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
  orgaId = 'Hgza28rQ-';
  option.headers['NX-Token'] = process.env.DEV;
  console.log('after:',{endpoint},'orgaId dev:',{orgaId},'token dev:',option.headers['NX-Token']);
};

function get(uri,_options){
  console.log('get',uri,_options)
  return request({
  method: 'GET',
  ..._options,
  ...option,
  uri: `${endpoint}${uri}`,
  });
};

function post(uri,body){
  console.log('post',uri,body)
  return request({
  method: 'POST',
  ...option,
  uri:`${endpoint}${uri}`,
  body,
  });
};




async function createOrder(test) {
  let _createOrder = await post('order/',
  {
      "orgId": `${orgaId}`,
      "name": test.name,
      "price": test.price,
    })
  console.log('createOrder=',_createOrder)
}

async function getOrder(){
let _get = await get(`order?orgId=${orgaId}`)
console.log('get=',_get)
return _get
}


module.exports ={createOrder, getOrder};