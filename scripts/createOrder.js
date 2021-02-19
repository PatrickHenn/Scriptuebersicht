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

async function getOrder(){
let _get = await get('order/?orgId='+`${orgaId}`); 
  // for(x=0; x<10; x++){
    _get.list.map((_d) => {
    const obj = {
    lastId :_d.id,
    lastName :_d.name,
    lastPrice :_d.total,
    lastRecipient :'patrick.henn+code@nx-technologies.com'//_get.list[x].recipient[0].email;
    };
  console.log('hi',obj)
  return obj
  })
}

module.exports ={createOrder, getOrder}; 