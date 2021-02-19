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

async function getOrder(){
let _get = await get('order/?orgId='+`${orgaId}`); 
  //   _get.list.map((X) => {
  //   const obj = {}
  //   obj = {
  //   lastId :X.id,
  //   lastName :X.name,
  //   lastPrice :X.total,
  //   lastRecipient :'patrick.henn+code@nx-technologies.com'//_get.list[x].recipient[0].email;
  //   };
  // console.log('hi',obj)
  // return obj
  // })
  
lastId = _get.list.map(function(X){
  return `${X.id}`
});
lastName = _get.list.map(function(X){
  return `${X.name}`
});
lastPrice = _get.list.map(function(X){
  return `${X.total}`
});
console.log(lastId)
}

// const obj = _get.list.filter(function(X){
//   return X.id + X.total + X.name
// })
// console.log('wwwwwwwwww',obj)
// }

module.exports ={createOrder, getOrder}; 