const ethers = require('ethers');

const INFURA_ID = '';   // infura id is required
const provider = new ethers.providers.JsonRpcProvider(`${INFURA_ID}`);
const ADDRESS = '0xE3811F270c789d5090A815076491baBe062aDBfA';

main = async () => {
    let balance = await provider.getBalance(ADDRESS);
    console.log(`${balance} ------> ${ethers.utils.formatEther(balance)}`);
}

main();
