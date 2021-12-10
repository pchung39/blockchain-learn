const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/2f9f036c98b4473f94134eca048d834d')

web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
})

// using sha function
console.log(web3.utils.sha3('test'))
console.log(web3.utils.randomHex(1))
 
const _ = require("underscore")
_.each({ key1: 'value1', key2: 'value2'}, (value, key) => {
    console.log(key)
})

