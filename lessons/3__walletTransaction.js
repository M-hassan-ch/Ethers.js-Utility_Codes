const ethers = require('ethers');

const INFURA_ID = '';   // infura id is required
const provider = new ethers.providers.JsonRpcProvider(`${INFURA_ID}`);

const account1 = '0x7E14ACE3647aF483F0945982BD158F61BB2909e4';
const account2 = '0x5659f042A1832506205fDf79b15a8F282AF86901';
const privateKey1 = 'f633ce49458269cd50a64d59b7054df42d39676baab009176307700c4f30d8d7';

const wallet = new ethers.Wallet(privateKey1, provider);

main = async () => {
    let balance1 = await provider.getBalance(account1);
    let balance2 = await provider.getBalance(account2);
    console.log(`Account 1 balance before transaction ---> ${ethers.utils.formatEther(balance1)}`);
    console.log(`Account 2 balance before transaction ---> ${ethers.utils.formatEther(balance2)}`);

    const tx = await wallet.sendTransaction({ to: account2, value: ethers.utils.parseEther('0.001') });
    tx.wait();
    console.log(tx);

    balance1 = await provider.getBalance(account1);
    balance2 = await provider.getBalance(account2);
    console.log(`Account 1 balance after transaction ---> ${ethers.utils.formatEther(balance1)}`);
    console.log(`Account 2 balance after transaction ---> ${ethers.utils.formatEther(balance2)}`);
}

main();
