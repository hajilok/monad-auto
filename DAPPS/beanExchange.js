import wallet from "../handle.js";

export const swapMonadbean = async (px) => {
  const walletData = await wallet(px);
  const abiMinimal = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "arg0",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "arg1",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "arg2",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "arg3",
          type: "uint256",
        },
      ],
      name: "swapExactETHForTokens",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "amountIn", type: "uint256" },
        { name: "path", type: "address[]" },
      ],
      name: "getAmountsOut",
      outputs: [{ name: "", type: "uint256[]" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  const contractAddress = "0xca810d095e90daae6e867c19df6d9a8c56db2c89";
  const contract = new walletData.wallet.eth.Contract(
    abiMinimal,
    contractAddress
  );
  const amount = walletData.wallet.utils.toWei("0.1", "ether");
  const deadline = Math.floor(Date.now() / 1000) + 60 * 60;
  const path = [
    "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
    "0xCc5B42F9d6144DFDFb6fb3987a2A916af902F5f8",
    "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
  ];

  const getAmount = await contract.methods.getAmountsOut(amount, path).call();
  const isAmount = (BigInt(getAmount[2]) * 95n) / 100n;

  const data = contract.methods
    .swapExactETHForTokens(
      isAmount.toString(),
      path,
      walletData.account.address,
      deadline
    )
    .encodeABI();

  const gasEstimate = await walletData.wallet.eth
    .estimateGas({
      from: walletData.account.address,
      to: contractAddress,
      data: data,
      value: amount,
    })
    .catch(() => 300000);

  const gasPrice = await walletData.wallet.eth.getGasPrice();

  const transaction = {
    from: walletData.account.address,
    to: contractAddress,
    data: data,
    value: amount,
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

  return `Successfully Swap Monad to Usdc on bean.exchange: https://testnet.monadexplorer.com/tx/${receipt.transactionHash}`;
};

export const swapUsdcbean = async (px) => {
  const walletData = await wallet(px);
  const approve = async () => {
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

    const contractAddress = "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea";
    const contract = new walletData.wallet.eth.Contract(abi, contractAddress);
    const maxUint256 =
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

    const data = contract.methods
      .approve("0xca810d095e90daae6e867c19df6d9a8c56db2c89", maxUint256)
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

  const getDataApprove = await approve();
  if (!getDataApprove) {
    return "Failed to approve And failed To Swap Usdc To Monad";
  }
  const abiMinimal = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountIn",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountOutMin",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "path",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "swapExactTokensForETH",
      outputs: [
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "amountIn", type: "uint256" },
        { name: "path", type: "address[]" },
      ],
      name: "getAmountsOut",
      outputs: [{ name: "", type: "uint256[]" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  const contractAddress = "0xca810d095e90daae6e867c19df6d9a8c56db2c89";
  const contract = new walletData.wallet.eth.Contract(
    abiMinimal,
    contractAddress
  );
  const amount = 100000;
  const deadline = Math.floor(Date.now() / 1000) + 60 * 60;
  const path = [
    "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
    `0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701`,
  ];
  const getAmount = await contract.methods.getAmountsOut(amount, path).call();
  const isAmount = (BigInt(getAmount[1]) * 95n) / 100n;
  const data = contract.methods
    .swapExactTokensForETH(
      amount,
      isAmount.toString(),
      path,
      walletData.account.address,
      deadline
    )
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

  return `Successfully Swap Usdc to Monad on bean.exchange: https://testnet.monadexplorer.com/tx/${receipt.logs[0].transactionHash}`;
};
