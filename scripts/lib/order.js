/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const { post, get, orgaId } = require('./request.js');

const orderId = 'doffmPY05';

async function changeOrder(test) {
  const createOrder = await post('order/',
    {
      orgId: `${orgaId}`,
      name: test.name,
      price: test.price,
      recipient: 'patrick.henn+test@nx-technologies.com',
    });

  const updateContactperson = await post(`order/${orderId}/update/contactperson`,
    {
      contactperson: 'patrick.henn+updatecontactperson@nx-technologies.com',
      orgId: `${orgaId}`,
    });
  console.log('updateContactperson', updateContactperson);

  const updateName = await post(`order/${orderId}/update/name`,
    {
      name: 'änderung coding test',
    });
  console.log('updateName', updateName);

  const recipient = await post(`order/${orderId}/recipient`,
    {
      recipient:
    {
      email: 'patrick.henn+codingRecipient@nx-technologies.com',
    },
    });

  const recipientDelet = await post(`order/${orderId}/recipient/delete`,
    {
      email: 'patrick.henn+codingRecipient@nx-technologies.com',
    });

  const updatePrice = await post(`order/${orderId}/update/price`,
    {
      price: 87654,
      assets: [
        {
          label: 'string',
          amount: 0,
        },
      ],
    });
  return {
    updateContactperson, updateName, recipient, updatePrice,
  };
/*
  const updateDuedate = await post(`order/${orderId}/update/duedate`,
    {
      duedate: '2021-08-24',
    });

  const duedateDelete = await post(`order/${orderId}/duedate/delete`,
    {
      responsekey: 'order.duedate.delete.success',
      responsemessage: 'Erfolgreich gespeichert',
    });
  console.log('duedateDelete', duedateDelete);

  const updatePickupdate = await post(`order/${orderId}/update/pickupdate/`,
    {
      pickupdate: '2021-09-24',
    });
  console.log('updatePickupdate', updatePickupdate);

  const deletePickupdate = await post(`order/${orderId}/delete/pickupdate/`,
    {
      responsekey: 'order.delete.pickupdate.success',
      responsemessage: 'Erfolgreich gespeichert',
    });
  console.log('deletePickupdate', deletePickupdate);

  const updateMetafields = await post(`order/${orderId}/update/metafields/`,
    {
      metafields: [
        {
          type: 'string',
          desc: 'string',
        },
      ],
      override: false,
    });
  console.log('updateMetafields', updateMetafields);

  const entwurf = await post('order',
    {
      orgId: `${orgaId}`,
      name: 'Entwurf über Code',
      attachment: '',
      draft: true,
      assets: [
        {
          label: 'Kaufpreis',
          amount: 900000,
        },
        {
          label: 'Sportreifen, MB',
          amount: 0,
        },
      ],
      payments: [
        {
          label: 'Inzahlungnahme',
          amount: 200000,
          confirmed: false,
          received: true,
        },
        {
          label: 'Finanzierung',
          amount: 49999,
          confirmed: true,
          received: true,
        },
      ],
      paymentoptions: {
        fts: true,
      },
      reminder: '7d',
      pickupdate: '2021-02-20',
      duedate: '2021-10-30',
      pickupWithoutPayment: true,
      recipient: 'patrick.henn+1@nx-technologies.com',
      contactperson: 'patrick.henn@nx-technologies.com',
      header: {
        url: 'www.bezahl.de',
        description: 'Back to Shop (draft)',
      },
      metafields: [
        {
          type: 'Farbe',
          desc: 'Schwarz',
        },
        {
          type: 'FIN',
          desc: 'WAUZZZFFS666766129',
        },
      ],
      customer: {
        id: 'i38iKq',
        company: '',
        firstname: 'Marlin',
        lastname: 'Freeze',
        street: 'Freiheisstraße',
        streetnumber: '60',
        zip: '51001',
        city: 'Köln',
        country: 'Deutschland',
        email: 'siegfried.obenauer+12@nx-technologies.com',
        phone: '0221/2957427',
      },
      tags: [
        'Rechnungskunde',
        'Neuwagen',
        'Service',
      ],
      invoice: [
        {
          desc: 'Inlandsrechnung',
          invoiceNo: '2020-30',
          debitor: 'Marlin Freeze',
          name: 'Marlin Freeze',
          amount: 100000,
          duedate: '2020-10-15',
        },
        {
          desc: 'Auslandsrechnung',
          invoiceNo: '2020-16',
          debitor: '67890',
          name: 'Gerard A. Way',
          amount: 0,
          duedate: '2020-08-24',
        },
      ],
    });
  console.log('entwurf', entwurf);

  const zahlungsplan = await post('order/plan',
    {
      orgId: `${orgaId}`,
      order: {
        name: 'Coding test',
        price: 40400,
        pickupdate: '2021-01-23',
        contactperson: 'patrick.henn+code@nx-technologies.com',
        recipient: 'patrick.henn+code@nx-technologies.com',
        reminder: 'disabled',
        paymentoptions: {

          cash: false,
          sepa: false,
          fts: true,
        },
        metafields: [
          {
            type: 'string',
            desc: 'Test',
          },
        ],
        customer: {
          id: 'string',
          company: 'CarRent',
          firstname: 'Max',
          lastname: 'Reiner',
          street: 'Am Rosenberg',
          streetnumber: '41',
          zip: '51101',
          city: 'Köln',
          country: 'Deutschland',
          email: 'example@mail.com',
          phone: '0123 1234567',
        },
        invoice: [
          {
            desc: 'string',
            invoice: 'dev_test',
            debitor: 'Herr Lang',
            name: 'string',
            amount: 20000,
            duedate: '2021-01-25',
          },
        ],
        draft: false,
        tags: [
          'string',
        ],
      },
      assets: [
        {
          label: 'Zusatz',
          amount: 100000,
        },
      ],
      payments: [
        {
          label: 'Vorzahlung',
          amount: 200000,
          confirmed: true,
          received: true,
        },
      ],
    });
  console.log('zahlungsplan', zahlungsplan);

  const allOrders = await get(`order?orgId=${orgaId}`);
  console.log('allOrders', allOrders);

  const oneOrder = await get(`order/${orgaId}`);
  console.log('oneOrder', oneOrder);

  const offline1 = await get(`order/${orderId}/offline?link=true`);
  console.log('offline1', offline1);

  const offline = await get(`order/${orderId}/offline`, { qs: { link: true } });
  console.log('offline', offline);
}
// .catch(err=> console.log('---------ERROR---------',err));

// upload attachment
// post(`order/${orderId}/attachment`,

// )(console.log);

// let closeOrder = await post(`order/${orderId}/hide`,
// {
//     "closed": true
//   })
// console.log('closeOrder',closeOrder);
*/
}
module.exports = { changeOrder };
