import Web3 from "web3";
import dotenv from "dotenv";
dotenv.config();
const wallet = async (px) => {
  const web3 = new Web3("https://testnet-rpc.monad.xyz/");
  const privateKey = px;
  const formattedPrivateKey = privateKey.startsWith("0x")
    ? privateKey
    : "0x" + privateKey;
  const account = web3.eth.accounts.privateKeyToAccount(formattedPrivateKey);
  web3.eth.accounts.wallet.add(account);
  return {
    account: account,
    wallet: web3,
    privateKey: formattedPrivateKey,
  };
};

export default wallet;
