require('dotenv').config();
const { response } = require('express')
const request = require('request-promise-native');
const {post,get,orgaId} = require("./lib/request.js");
let orderId = 'doffmPY05';
// let orgaId = '';

async function createOrder(test) {
  let _createOrder = await post('order/',
  {
      "orgId": `${orgaId}`,
      "name": test.name,
      "price": test.price,
      "recipient": 'patrick.henn+res@nx-technologies.com'
    })
  console.log('createOrder=',_createOrder);
  return createOrder, test.name
};

let lastId = ''
let obj = []

async function getOrder(){
let _get = await get('order/?orgId='+`${orgaId}`); 
    obj = _get.list.map((X) => {
    const data = {
    lastId :X.id,
    lastName :X.name,
    lastPrice :X.total,
    lastRecipient : X.recipient.length?X.recipient[0].email:"" // 'patrick.henn+code@nx-technologies.com'//_get.list[x].recipient[0].email;
    };
    return data
  });
  console.log('OOOOO',obj)
};

module.exports ={createOrder, getOrder}; 