import wallet from "../wallet.js";

const deposit = async (px) => {
  const walletData = await wallet(px);

  const amount = walletData.wallet.utils.toWei("0.1", "ether");
  const contractAddress = "0xb2f82D0f38dc453D596Ad40A37799446Cc89274A";

  const stakeAmount = BigInt(walletData.wallet.utils.toWei("0.1", "ether"));

  const data =
    "0x6e553f65" +
    walletData.wallet.utils.padLeft(stakeAmount.toString(16), 64, "0") +
    walletData.wallet.utils.padLeft(
      walletData.account.address.replace(/^0x/, ""),
      64,
      "0"
    );

  const gasEstimate = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contractAddress,
    value: amount,
    data: data,
  });

  const tx = {
    from: walletData.account.address,
    to: contractAddress,
    value: amount,
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

  // usntake function

  const unstakeData = `0x7d41c86e00000000000000000000000000000000000000000000000000b1a2bc2ec50000000000000000000000000000${walletData.account.address.replace(
    /^0x/,
    ""
  )}000000000000000000000000${walletData.account.address.replace(/^0x/, "")}`;

  const gasEstimateUnstake = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contractAddress,
    data: unstakeData,
  });
  const txUnstake = {
    from: walletData.account.address,
    to: contractAddress,
    data: unstakeData,
    gas: gasEstimateUnstake,
    gasPrice: await walletData.wallet.eth.getGasPrice(),
  };
  const signedTxUnstake = await walletData.account.signTransaction(
    txUnstake,
    walletData.privateKey
  );
  const receiptUnstake = await walletData.wallet.eth.sendSignedTransaction(
    signedTxUnstake.rawTransaction
  );
  return {
    stakeMessage: `Successfully Staked on Apriori: https://testnet.monadexplorer.com/tx/${receipt.logs[0].transactionHash}`,
    unstakeMessage: `Successfully Unstake on Apriori: https://testnet.monadexplorer.com/tx/${receiptUnstake.logs[0].transactionHash}`,
  };
};

export default deposit;
