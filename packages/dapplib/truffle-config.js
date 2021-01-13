require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember evil hunt inflict swallow sentence'; 
let testAccounts = [
"0x444e3a520e40d06f1e52956309262c3fbc393f699a27d919375e7697b614f805",
"0xc6e901935a3a4e2d8b7383843529d2e49d12a04499ce7027cd641df7ee7dff5d",
"0xe98cc95f1378938cffc6650c5c4b8e08b7063165dd23f94ae610b962b9f818a1",
"0x234f9ea1624c0b58a7a58475704b881cd2e35beae1b6210c091d12255aba07fb",
"0x2795fbee6b3dc7b7d1feb36f3e49db89833c39369802483271cda1c4fb2b59c3",
"0x125b590977b8435e3b432322a19d0d1aca7dcf4ef69060096293b5afa080984d",
"0x5ca3a805ed293a21ca2f387cc533295476d30f005ee2452e4e7df00d6b9191a3",
"0x1b74d7c45c4b36afe40363da2b7f1d2301067d98e866e1a5bb5ab3fdc12da217",
"0xbd671e052349bade9319ff2302d0762d000f0cd0290387c4d7c90060fbc084bc",
"0xbe18a6740ff191f4085e781d43cccf670a1b90d662c6b398bee0df7f0adf226f"
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
            version: '^0.5.11'
        }
    }
};
