const Client = require('bitcoin-core');
const client = new Client({ username:'',password:'',network: 'regtest',port: 28332,ssl: {
    enabled: true,
    strict: false} });
    client.getInfo((error, help) => console.log(error));
  