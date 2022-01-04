require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool crawl mushroom puppy gesture pave army general'; 
let testAccounts = [
"0x01c687ea32a40110fa0e557a6b59b7de1f213a8bfae6e95d871c607ebe08f6e9",
"0x86c96cb508bcad48e240234c9b84be0a6ddb719cbab01b1bd678cc1938ec77b7",
"0x758d4f52f38e8c938b82bd045cef94de493602256987dc70268bc72f0afd2580",
"0xcc3140ae01b43d2700611827d3cb1e1fd4afc0e3743f70b26800fa90b612cd27",
"0xfdd6c2c257550ee525ef0d3349b26b69b263b4ca3b3aa49eb82e3e24db01e15d",
"0x9e69b7451aa9d6d1634fa8825a967c86e1797aa911f9f3f4fcd7ff0e6a0c0d4a",
"0x9e546aced82be6bc1fe45c541c1787d281cce619dc877635c9c0cc9253cb357c",
"0xf15be4af8fbd7de12b1259e93bbd97c53824cece23ffb76121bdee66a7cc2f03",
"0x20248bbd4534c889990e7dc6001482a2b4a2c6937df2bf2782b18470f016805b",
"0x610ee36e3548e27f4aeb8c5cc42b6fc0df1919233c4f380855d47c520e2bf885"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

