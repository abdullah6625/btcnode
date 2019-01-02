const Client = require('bitcoin-core');
const client = new Client({ rpcuser:'bitcoin123',rpcpassword:'btcnode123',network: 'regtest',port: 28332,ssl: {
    enabled: true,
    strict: false} });
    client.getInfo((error, help) => console.log(error));
  