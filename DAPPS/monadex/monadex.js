import wallet from "../../handle.js";
import { monadexswapABI } from "./monadexABI.js";

const approve = async (px, token) => {
  const walletData = await wallet(px);
  const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const contractAddress = token;
  const contract = new walletData.wallet.eth.Contract(abi, contractAddress);
  const maxUint256 =
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

  const data = contract.methods
    .approve("0xCBcd292c9DAE11875E090Bb963aA4C74ccCE6a23", maxUint256)
    .encodeABI();

  const gasEstimate = await walletData.wallet.eth
    .estimateGas({
      from: walletData.account.address,
      to: contractAddress,
      data: data,
    })
    .catch(() => 300000);

  const gasPrice = await walletData.wallet.eth.getGasPrice();

  const transaction = {
    from: walletData.account.address,
    to: contractAddress,
    data: data,
    gas: Math.floor(Number(gasEstimate) * 1.2),
    gasPrice: Math.floor(Number(gasPrice) * 1.1).toString(),
  };

  const signedTransaction = await walletData.account.signTransaction(
    transaction,
    walletData.privateKey
  );

  const receipt = await walletData.wallet.eth.sendSignedTransaction(
    signedTransaction.rawTransaction
  );

  return receipt;
};

const monadex = async (privateKey) => {
  const walletData = await wallet(privateKey);
  const monadexSwap = "0xCBcd292c9DAE11875E090Bb963aA4C74ccCE6a23";
  const monadexSwapContract = new walletData.wallet.eth.Contract(
    monadexswapABI,
    monadexSwap
  );
  const amount = walletData.wallet.utils.toWei("0.1", "ether");
  const deadline = Math.floor(Date.now() / 1000) + 60 * 60;
  const path = [
    "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
    `0x3a98250F98Dd388C211206983453837C8365BDc1`,
  ];
  const getAmount = await monadexSwapContract.methods
    .getAmountsOut(amount, path)
    .call();
  const isAmount = (BigInt(getAmount[1]) * 95n) / 100n;

  const _raffle = {
    enter: false,
    fractionOfSwapAmount: {
      numerator: 1,
      denominator: 10,
    },
    raffleNftReceiver: walletData.account.address,
  };

  const dataSwap = monadexSwapContract.methods
    .swapExactNativeForTokens(
      isAmount.toString(),
      path,
      walletData.account.address,
      deadline,
      _raffle
    )
    .encodeABI();

  const gas = await walletData.wallet.eth.estimateGas({
    from: walletData.account.address,
    to: monadexSwap,
    data: dataSwap,
    value: amount,
  });
  const gasPrice = await walletData.wallet.eth.getGasPrice();

  const transaction = {
    from: walletData.account.address,
    to: monadexSwap,
    data: dataSwap,
    value: amount,
    gas: Math.floor(Number(gas) * 1.5),
    gasPrice: Math.floor(Number(gasPrice) * 1.2).toString(),
  };

  const signedTransaction = await walletData.account.signTransaction(
    transaction
  );
  const receipt = await walletData.wallet.eth.sendSignedTransaction(
    signedTransaction.rawTransaction
  );
  const approvewMonad = await approve(privateKey, path[0]);
  const approveShmonad = await approve(privateKey, path[1]);
  if (!approvewMonad.transactionHash && !approveShmonad.transactionHash) {
    return `Failed to approve Monadex Swap`;
  }
  const tokenA = path[0];
  const tokenB = path[1];
  const receiver = walletData.account.address;
  const amountADesired = walletData.wallet.utils.toWei("0.08", "ether");

  try {
    const pathForQuote = [tokenA, tokenB];
    const amountBDesiredArray = await monadexSwapContract.methods
      .getAmountsOut(amountADesired, pathForQuote)
      .call();
    const amountBDesired = amountBDesiredArray[1];

    const addLiquidityParams = {
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMin: walletData.wallet.utils.toWei("0.078", "ether"),
      amountBMin: (BigInt(amountBDesired) * 97n) / 100n,
      receiver,
      deadline: Math.floor(Date.now() / 1000) + 600,
    };

    const dataAddLiquidity = monadexSwapContract.methods
      .addLiquidity(addLiquidityParams)
      .encodeABI();

    const gasLiquidity = await walletData.wallet.eth.estimateGas({
      from: receiver,
      to: monadexSwap,
      data: dataAddLiquidity,
    });

    const gasPriceLiquidity = await walletData.wallet.eth.getGasPrice();

    const transactionLiquidity = {
      from: receiver,
      to: monadexSwap,
      data: dataAddLiquidity,
      gas: Math.floor(Number(gasLiquidity) * 1.5),
      gasPrice: Math.floor(Number(gasPriceLiquidity) * 1.2).toString(),
    };
    const signedTxLiquidity = await walletData.account.signTransaction(
      transactionLiquidity
    );
    const receiptLiquidity = await walletData.wallet.eth.sendSignedTransaction(
      signedTxLiquidity.rawTransaction
    );

    return {
      message: `Swap Monad to shMonad on Monadex Success with tx: https://testnet.monadexplorer.com/tx/${receipt.logs[0].transactionHash}`,
      liquidityMessage: `Add liquidity wMonad and shMonad On monadex success with tx: https://testnet.monadexplorer.com/tx/${receiptLiquidity.logs[0].transactionHash}`,
    };
  } catch (error) {
    console.error("Failed to add liquidity:", error);
  }
};

export default monadex;
