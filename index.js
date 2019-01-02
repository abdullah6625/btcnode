const Client = require('bitcoin-core');
const client = new Client({
    user:'bitcoin123',
    pass:'btcnode123',
    port: 8332,
host:'127.0.0.1'});
client.getInfo().then((help) => console.log(help)).catch((Err)=>{
    console.log('helllooo');
    console.log(Err);
})