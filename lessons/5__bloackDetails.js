const ethers = require('ethers');

const INFURA_ID = '';   // infura id is required
const PROVIDER = new ethers.providers.JsonRpcProvider(`${INFURA_ID}`);

main = async () => {
    let block = await PROVIDER.getBlockNumber();
    console.log(`Latest block ${block}`);
    let blockinfo = await PROVIDER.getBlock(block);
    console.log(blockinfo);
    let blockWithTransaction = await PROVIDER.getBlockWithTransactions(block)
    console.log(blockWithTransaction);
}

main();
