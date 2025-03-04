import Web3 from "web3";
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
const wallet = async (px) => {
  const rpcUrl = `https://monad-testnet.g.alchemy.com/v2/nR72bxK2nIiUl42EDVpqbNDDTo0yyGDX`;
  const web3 = new Web3(rpcUrl);
  const privateKey = px;
  const formattedPrivateKey = privateKey.startsWith("0x")
    ? privateKey
    : "0x" + privateKey;
  const account = web3.eth.accounts.privateKeyToAccount(formattedPrivateKey);
  web3.eth.accounts.wallet.add(account);
  const providers = new ethers.providers.JsonRpcProvider(rpcUrl);
  return {
    account: account,
    wallet: web3,
    privateKey: formattedPrivateKey,
    providers: providers,
    signer: new ethers.Wallet(formattedPrivateKey, providers),
  };
};

export default wallet;
