const Client = require('bitcoin-core');
const client = new Client({ user:'bitcoin123',pass:'btcnode123',port: 28332});
    client.getInfo((error, help) => console.log(error));
  