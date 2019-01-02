const Client = require('bitcoin-core');
const client = new Client({ user:'bitcoin123',pass:'btcnode123',network: 'regtest',port: 28332,ssl: {
    enabled: true,
    strict: false} });
    client.getInfo((error, help) => console.log(error));
  