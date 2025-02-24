import wallet from "../handle.js";

const swapOnBebop = async (px) => {
  const walletData = await wallet(px);
  const contract = "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701";
  const wrapEth = "0xd0e30db0";
  const unwrapEth =
    "0x2e1a7d4d000000000000000000000000000000000000000000000000016345785d8a0000";

  const estimateGasWrap = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contract,
    data: wrapEth,
    value: walletData.wallet.utils.toWei("0.1", "ether"),
  });

  const txWrap = {
    from: walletData.account.address,
    to: contract,
    data: wrapEth,
    value: walletData.wallet.utils.toWei("0.1", "ether"),
    gas: estimateGasWrap,
    gasPrice: await walletData.wallet.eth.getGasPrice(),
  };
  const signedTxWrap = await walletData.account.signTransaction(
    txWrap,
    walletData.privateKey
  );
  const receiptWrap = await walletData.wallet.eth.sendSignedTransaction(
    signedTxWrap.rawTransaction
  );

  const estimateGasUnwrap = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: contract,
    data: unwrapEth,
  });

  const txUnwrap = {
    from: walletData.account.address,
    to: contract,
    data: unwrapEth,
    gas: estimateGasUnwrap,
    gasPrice: await walletData.wallet.eth.getGasPrice(),
  };
  const signedTxUnwrap = await walletData.account.signTransaction(
    txUnwrap,
    walletData.privateKey
  );
  const receiptUnwrap = await walletData.wallet.eth.sendSignedTransaction(
    signedTxUnwrap.rawTransaction
  );
  return {
    wrapMessage: `Successfully Wrap Eth on bebop: https://testnet.monadexplorer.com/tx/${receiptWrap.logs[0].transactionHash}`,
    unwrapMessage: `Successfully UnWrap Eth on Bebop: https://testnet.monadexplorer.com/tx/${receiptUnwrap.logs[0].transactionHash}`,
  };
};

export default swapOnBebop;
