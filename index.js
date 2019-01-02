const Client = require('bitcoin-core');
const client = new Client({ user:'bitcoin123',pass:'btcnode123',port: 8332});
    client.getInfo((error, help) => console.log(help));
