// blockchain確認
var Web3 = require('web3');

// gethに繋げる
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// UTXOの確認

// トランザクションの確認
web3.eth.getTransaction(hash, function(err, tx){
    if(!err) console.log(tx)
    else console.log(err)
})

// RAWトランザクション送信
var rawtx = 'hexstring';
web3.eth.sendTransaction(rawtx, function(err, hash){
    if(!err) console.log(hash)
    else console.log(err)
})
