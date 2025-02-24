import axios from "axios";
import wallet from "../handle.js";

const vote = async (px) => {
  const walletData = await wallet(px);

  const getMessage = await axios.get(
    `https://api.aicraft.fun/auths/wallets/sign-in/message?address=${walletData.account.address}&type=ETHEREUM_BASED`
  );

  const signature = walletData.wallet.eth.accounts.sign(
    getMessage.data.data.message,
    walletData.privateKey
  );

  const getToken = await axios.post(
    "https://api.aicraft.fun/auths/wallets/sign-in",
    {
      address: walletData.account.address,
      signature: signature.signature,
      message: getMessage.data.data.message,
      type: "ETHEREUM_BASED",
      refCode: "Z9INWOZWAV",
    }
  );

  // console.log(getToken.data.data.token);

  const getMe = await axios.get("https://api.aicraft.fun/users/me", {
    headers: {
      Authorization: `Bearer ${getToken.data.data.token}`,
      Accept: "application/json",
    },
  });

  const getAbi = await axios.post(
    "https://api.aicraft.fun/feeds/orders",
    {
      candidateID: getMe.data.data.feedCount[0].candidate,
      walletID: getMe.data.data.wallets[0]._id,
      feedAmount: 1,
      chainID: "10143",
      refCode: "Z9INWOZWAV",
    },
    {
      headers: {
        Authorization: `Bearer ${getToken.data.data.token}`,
        Accept: "application/json",
      },
    }
  );

  const contractAddress = getAbi.data.data.payment.contractAddress;
  const contract = new walletData.wallet.eth.Contract(
    getAbi.data.data.payment.abi,
    contractAddress
  );

  const {
    candidateID,
    feedAmount,
    requestID,
    requestData,
    userHashedMessage,
    integritySignature,
  } = getAbi.data.data.payment.params;

  const signedMessage = walletData.wallet.eth.accounts.sign(
    userHashedMessage,
    walletData.privateKey
  );

  const data = contract.methods
    .feed(
      candidateID,
      feedAmount,
      requestID,
      requestData,
      signedMessage.signature,
      integritySignature
    )
    .encodeABI();
  const gasEstimate = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contractAddress,
    data: data,
  });

  const tx = {
    from: walletData.account.address,
    to: contractAddress,
    data: data,
    gas: gasEstimate,
    gasPrice: await walletData.wallet.eth.getGasPrice(),
  };

  const signedTx = await walletData.account.signTransaction(
    tx,
    walletData.privateKey
  );
  const receipt = await walletData.wallet.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );
  return `Vote Hash Successful on aicraft : https://testnet.monadexplorer.com/tx/${receipt.logs[0].transactionHash}`;
};

export default vote;
