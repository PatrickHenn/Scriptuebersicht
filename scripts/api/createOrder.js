require('dotenv').config();
const { response } = require('express')
const request = require('request-promise-native');
// const {post,get,orgaId} = require("./../../lib/request.js");
//let orderId = 'doffmPY05';
let orgaId = 'Hgza28rQ-';


let option = {
  headers: {
      'Content-Type' : 'application/json',
      'NX-Token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJKLVNldDc0UCIsImVtYWlsIjoicGF0cmljay5oZW5uQG54LXRlY2hub2xvZ2llcy5jb20iLCJ1dWlkIjoiY2NiM2YyMDEtNzlhZS00ZjQzLTgzODEtOGFhNjU4MDc3MzYxIiwiaWF0IjoxNTk3MzIzODU3LCJleHAiOjE3MjM1NTQyNTd9.bSK6bxk6IWnj26HRTJbxMF_r24WsfE5qfJ7Q_5ptiBM',
  },
  json: true
};

let endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
/*
if (process.env.STACK === 'dev'){
  endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
  orgaId = 'Hgza28rQ-';
  option.headers['NX-Token'] = process.env.DEV;
  console.log('after:',{endpoint},'orgaId dev:',{orgaId},'token dev:',option.headers['NX-Token']);
};
*/
function get(uri){
  console.log('get',uri)
  return request({
  method: 'GET',
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

function getOrder(){
let _get =  get(`order?orgId=${orgaId}`)
console.log('get=',_get)
return _get
}

module.exports ={createOrder, getOrder};