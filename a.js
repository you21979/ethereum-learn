var bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey')

var mnemonic = 'armed bundle pudding lazy strategy impulse where identify submit weekend physical antenna flight social acoustic absurd whip snack decide blur unfold fiction pumpkin athlete';
var password = '';
var masterseed = bip39.mnemonicToSeed(mnemonic, password);
var hdnode = hdkey.fromMasterSeed(masterseed);
console.log(hdnode.derivePath("m/44'/60'/0'/0/0").getWallet().getAddressString())
console.log(hdnode.derivePath("m/44'/60'/0'/0/1").getWallet().getAddressString())
console.log(hdnode.derivePath("m/44'/60'/0'/0/2").getWallet().getAddressString())
console.log(hdnode.derivePath("m/44'/60'/0'/0/3").getWallet().getAddressString())
