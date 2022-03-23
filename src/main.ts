import {ethers, Wallet} from "ethers"
import { PropertyPoolABI } from './abis/PropertyPool'

function sayMyName(name: string): void {
	if (name === "Heisenberg") {
		console.log("You're right 👍");
	} else {
		console.log("You're wrong 👎");
	}
}

const PrivateKey = '4a71b4204fc574d2161466f3d025f4e54f18003e8f6c521b1e24925447ce402b';
const RPC = 'https://data-seed-prebsc-1-s1.binance.org:8545'
const PoolAddress = '0x8A83F3544Adbf5D5838cbebcf3A99af71628aa64'

const provider = new ethers.providers.JsonRpcProvider(RPC)

async function start() {
	let signer = new Wallet(PrivateKey, provider);
	const contract = new ethers.Contract(PoolAddress, PropertyPoolABI, signer);
	const tx = await contract.addWhitelist([
		['0x11B7Bd11c10633f7ED0B4a14fF886E506c7Cad31', 20]
	]);
	console.log(tx);
	await tx.wait();
	console.log('done');
}

start()

