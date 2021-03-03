const assert = require('assert');
const { getOrder } = require('../scripts/createOrder');
const { createOrder } = require('../scripts/createOrder');

describe('createOrder',() => {
    it('pls send water', async () => {
        const test = await createOrder({name:'etwas1',price:'2999'});
        console.log(test)
            const get = await getOrder();
            console.log(get)
            assert.equal(lastName[0],'etwas1')
    });
});

// describe('test',() => {
//     it.only('pls send help', async () => {
//         const test = await getOrder();
//         console.log(test)
//         assert.equal(typeof test,'array')
//     });
// });

