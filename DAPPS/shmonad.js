import wallet from "../handle.js";

const shmonad = async (px) => {
  const walletData = await wallet(px);
  const contract = "0x3a98250F98Dd388C211206983453837C8365BDc1";
  const stake = `0x6e553f65000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000${walletData.account.address.replace(
    /^0x/,
    ""
  )}`;
  const commitTo4337Paymaster = `0xf62012390000000000000000000000000000000000000000000000000000000000000004000000000000000000000000${walletData.account.address.replace(
    /^0x/,
    ""
  )}000000000000000000000000000000000000000000000000002386f26fc10000`;
  const commitToTaskManager = `0xf62012390000000000000000000000000000000000000000000000000000000000000005000000000000000000000000${walletData.account.address.replace(
    /^0x/,
    ""
  )}000000000000000000000000000000000000000000000000002386f26fc10000`;
  try {
    const nonceBase = Number(
      await walletData.wallet.eth.getTransactionCount(
        walletData.account.address,
        "pending"
      )
    );

    const gasPrice = await walletData.wallet.eth.getGasPrice();

    const gasEstimateStake = await walletData.wallet.eth.estimateGas({
      from: walletData.account.address,
      to: contract,
      value: walletData.wallet.utils.toWei("0.1", "ether"),
      data: stake,
    });
    const gasEstimateCommitTo4337Paymaster =
      await walletData.wallet.eth.estimateGas({
        from: walletData.account.address,
        to: contract,
        data: commitTo4337Paymaster,
      });
    const gasEstimateCommitToTaskManager =
      await walletData.wallet.eth.estimateGas({
        from: walletData.account.address,
        to: contract,
        data: commitToTaskManager,
      });

    const signedTxStake = await walletData.account.signTransaction({
      from: walletData.account.address,
      to: contract,
      data: stake,
      value: walletData.wallet.utils.toWei("0.1", "ether"),
      gas: gasEstimateStake,
      gasPrice,
      nonce: nonceBase,
    });
    const signedTxCommitTo4337Paymaster =
      await walletData.account.signTransaction({
        from: walletData.account.address,
        to: contract,
        data: commitTo4337Paymaster,
        gas: gasEstimateCommitTo4337Paymaster,
        gasPrice,
        nonce: nonceBase + 1,
      });
    const signedTxCommitToTaskManager =
      await walletData.account.signTransaction({
        from: walletData.account.address,
        to: contract,
        data: commitToTaskManager,
        gas: gasEstimateCommitToTaskManager,
        gasPrice,
        nonce: nonceBase + 2,
      });

    const receiptStake = await walletData.wallet.eth.sendSignedTransaction(
      signedTxStake.rawTransaction
    );
    const receiptCommitTo4337Paymaster =
      await walletData.wallet.eth.sendSignedTransaction(
        signedTxCommitTo4337Paymaster.rawTransaction
      );
    const receiptCommitToTaskManager =
      await walletData.wallet.eth.sendSignedTransaction(
        signedTxCommitToTaskManager.rawTransaction
      );

    return {
      messageStake: `Successfully staked 0.1 monad to Shmonad Tx:  https://testnet.monadexplorer.com/tx/${receiptStake.logs[0].transactionHash}`,
      messageCommitTo4337Paymaster: `Successfully committed to 4337 paymaster Tx:  https://testnet.monadexplorer.com/tx/${receiptCommitTo4337Paymaster.logs[0].transactionHash}`,
      messageCommitToTaskManager: `Successfully committed to TaskManager Tx:  https://testnet.monadexplorer.com/tx/${receiptCommitToTaskManager.logs[0].transactionHash}`,
    };
  } catch (error) {
    return {
      error: error.message,
      messageStake: null,
      messageCommitTo4337Paymaster: null,
      messageCommitToTaskManager: null,
    };
  }
};

export default shmonad;
