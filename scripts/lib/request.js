/*
const request = require('request-promise-native');
require('dotenv').config();

let option = {
    headers: {
        'Content-Type' : 'application/json',
        'NX-Token' : '',
    },
    json: true
};

let endpoint = '';
let orgaId = "";

if (process.env.STACK === 'dev'){
    endpoint = 'https://api.dev.nx.bezahl.de/nxt/v1/';
    orgaId = 'Hgza28rQ-';
    option.headers['NX-Token'] = process.env.DEV;
    console.log('after:',{endpoint},'orgaId dev:',{orgaId},'token dev:',option.headers['NX-Token']);
};

if (process.env.STACK === 'int'){
    endpoint = 'https://api.int.nx.bezahl.de/nxt/v1/';
    orgaId = 'TqUnGlyJc';
    option.headers['NX-Token'] = process.env.INT;
    console.log('after:',{endpoint},'token int:','orgaId int:',{orgaId},'token int:',option.headers['NX-Token']);
};

if (process.env.STACK === 'test'){
    endpoint = 'https://api.test.nx.bezahl.de/nxt/v1/';
    orgaId = 'TpQlrB3-F';
    option.headers['NX-Token'] = process.env.TEST;
    console.log('after:',{endpoint},'orgaId test:',{orgaId},'token test:',option.headers['NX-Token']);
};


function get(uri,_options){
    console.log('get',uri)
    return request({
    method: 'GET',
    ..._options,
    ...option,
    uri: `${endpoint}${uri}`,
    });
};

function post(uri,body){
    console.log('post',uri)
    return request({
    method: 'POST',
    ...option,
    uri:`${endpoint}${uri}`,
    body,
    });
};

function del(uri,body){
    console.log('del',uri)
    return request({
    method: 'DELETE',
    ...option,
    uri:`${endpoint}${uri}`,
    body,
    });
};

module.exports = {get,post,del,orgaId}
*/