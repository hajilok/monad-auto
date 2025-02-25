import wallet from "../handle.js";

const stakeOnmagma = async (px) => {
  const walletData = await wallet(px);
  const contract = `0x2c9C959516e9AAEdB2C748224a41249202ca8BE7`;

  // Ambil gasPrice dengan await
  const gasPrice = await walletData.wallet.eth.getGasPrice();

  // Estimasi gas untuk staking
  const gasEstimate = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contract,
    value: walletData.wallet.utils.toWei("0.1", "ether"),
    data: `0xd5575982`,
  });

  const tx = {
    from: walletData.account.address,
    to: contract,
    value: walletData.wallet.utils.toWei("0.1", "ether"),
    data: `0xd5575982`,
    gas: gasEstimate,
    gasPrice: gasPrice,
  };

  // Estimasi gas untuk unstaking
  const unstakeGasEstimate = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contract,
    data: `0x6fed1ea7000000000000000000000000000000000000000000000000002386f26fc10000`,
  });

  const unstakeTx = {
    from: walletData.account.address,
    to: contract,
    data: `0x6fed1ea7000000000000000000000000000000000000000000000000002386f26fc10000`,
    gas: unstakeGasEstimate,
    gasPrice: gasPrice,
  };

  // Tanda tangani dan kirim transaksi staking
  const signedTx = await walletData.account.signTransaction(
    tx,
    walletData.privateKey
  );
  const receipt = await walletData.wallet.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );

  // Tanda tangani dan kirim transaksi unstaking
  const signedUnstakeTx = await walletData.account.signTransaction(
    unstakeTx,
    walletData.privateKey
  );
  const unstakeReceipt = await walletData.wallet.eth.sendSignedTransaction(
    signedUnstakeTx.rawTransaction
  );

  return {
    stakeMessage: `Successfully Stake Monad on Magma Staking: https://testnet.monadexplorer.com/tx/${receipt.logs[0].transactionHash}`,
    unstakeMessage: `Successfully unStake Monad on Magma Staking: https://testnet.monadexplorer.com/tx/${unstakeReceipt.logs[0].transactionHash}`,
  };
};

export default stakeOnmagma;
