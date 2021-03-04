require('dotenv').config();
const request = require('request-promise-native');
const {post,get,orgaId} = require("./lib/request.js");

async function createOrder(test) {
  let _createOrder = await post('order/',
  {
      "orgId": `${orgaId}`,
      "name": test.name,
      "price": test.price,
      "recipient": 'patrick.henn+res@nx-technologies.com'
    });
  console.log('createOrder=',_createOrder);
  return createOrder, test.name
};

async function getOrder(){
let _get = await get('order/?orgId='+`${orgaId}`);
    let obj = [];
    obj = _get.list.map((X) => {
    const data = {
    lastId :X.id,
    lastName :X.name,
    lastPrice :X.total,
    lastRecipient : X.recipient.length?X.recipient[0].email:"" 
    };  
    return data
  });
  return obj
};

module.exports ={createOrder, getOrder}; 