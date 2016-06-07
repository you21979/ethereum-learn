// トランザクションの作成

var Tx = require('ethereumjs-tx')
var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')
 
var rawTx = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000', 
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000', 
  value: '0x00', 
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}
 
var tx = new Tx(rawTx)
tx.sign(privateKey)
 
var serializedTx = tx.serialize()
console.log(serializedTx.toString("hex"))
