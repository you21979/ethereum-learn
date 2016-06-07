// HDWALLETの確認

var bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey')

var mnemonic = 'armed bundle pudding lazy strategy impulse where identify submit weekend physical antenna flight social acoustic absurd whip snack decide blur unfold fiction pumpkin athlete';
var password = '';
var masterseed = bip39.mnemonicToSeed(mnemonic, password);
var hdnode = hdkey.fromMasterSeed(masterseed);

var getKeyPair = function(hdnode){
    return {
        "address" : hdnode.getWallet().getAddressString(),
        "private" : hdnode.getWallet().getPrivateKeyString(),
        "public" : hdnode.getWallet().getPublicKeyString(),
    }
}

// cointype=60=eth
// m / purpose' / coin_type' / account' / change / address_index
console.log(getKeyPair(hdnode.derivePath("m/44'/60'/0'/0/0")))
console.log(getKeyPair(hdnode.derivePath("m/44'/60'/0'/0/1")))
