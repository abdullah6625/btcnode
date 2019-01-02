const Client = require('bitcoin-core');
const client = new Client({
    username:'bitcoin123',
    password:'btcnode123',
    port: 8332,
host:'127.0.0.1'});
    client.getInfo((error, help) => console.log(help));