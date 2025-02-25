import handle from "../handle.js";

const kintzu = async (px) => {
  const walletData = await handle(px);
  const stake = `0x3a4b66f1`;
  const unstake = `0x30af6b2e000000000000000000000000000000000000000000000000002386f26fc10000`;
  const contract = `0x07AabD925866E8353407E67C1D157836f7Ad923e`;
  const amount = walletData.wallet.utils.toWei("0.1", "ether");
  const gasPrice = await walletData.wallet.eth.getGasPrice();
  const gasEstimate = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contract,
    value: amount,
    data: stake,
  });
  const tx = {
    from: walletData.account.address,
    to: contract,
    value: amount,
    data: stake,
    gas: Math.floor(Number(gasEstimate) * 1.2),
    gasPrice: Math.floor(Number(gasPrice) * 1.1).toString(),
  };
  const signedTx = await walletData.account.signTransaction(
    tx,
    walletData.privateKey
  );
  const receipt = await walletData.wallet.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );
  const gasEstimateUnstake = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contract,
    data: unstake,
  });
  const txUnstake = {
    from: walletData.account.address,
    to: contract,
    data: unstake,
    gas: Math.floor(Number(gasEstimateUnstake) * 1.2),
    gasPrice: Math.floor(Number(gasPrice) * 1.1).toString(),
  };
  const signedTxUnstake = await walletData.account.signTransaction(
    txUnstake,
    walletData.privateKey
  );
  const receiptUnstake = await walletData.wallet.eth.sendSignedTransaction(
    signedTxUnstake.rawTransaction
  );
  return {
    stakeMessage: `Successfully Stake on Kintzu: https://testnet.monadexplorer.com/tx/${receipt.logs[0].transactionHash}`,
    unstakeMessage: `Successfully Unstake on Kintzu: https://testnet.monadexplorer.com/tx/${receiptUnstake.logs[0].transactionHash}`,
  };
};

export default kintzu;
