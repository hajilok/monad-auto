export const monadexswapABI = [
  {
    inputs: [
      { internalType: "address", name: "_factory", type: "address" },
      { internalType: "address", name: "_raffle", type: "address" },
      { internalType: "address", name: "_wNative", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "MonadexV1Library__InputAmountZero", type: "error" },
  { inputs: [], name: "MonadexV1Library__InvalidSwapPath", type: "error" },
  { inputs: [], name: "MonadexV1Library__OutputAmountZero", type: "error" },
  { inputs: [], name: "MonadexV1Library__ReservesZero", type: "error" },
  { inputs: [], name: "MonadexV1Library__ZeroAmountIn", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "givenDeadline", type: "uint256" },
      { internalType: "uint256", name: "currentTimestamp", type: "uint256" },
    ],
    name: "MonadexV1Router__DeadlinePasssed",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
    ],
    name: "MonadexV1Router__ExcessiveInputAmount",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
    ],
    name: "MonadexV1Router__InsufficientAAmount",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountB", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
    ],
    name: "MonadexV1Router__InsufficientBAmount",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
    ],
    name: "MonadexV1Router__InsufficientOutputAmount",
    type: "error",
  },
  { inputs: [], name: "MonadexV1Router__InvalidPath", type: "error" },
  { inputs: [], name: "MonadexV1Router__PermitFailed", type: "error" },
  {
    inputs: [],
    name: "MonadexV1Router__TokenNotSupportedByRaffle",
    type: "error",
  },
  { inputs: [], name: "MonadexV1Router__TransferFailed", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenA", type: "address" },
          { internalType: "address", name: "tokenB", type: "address" },
          { internalType: "uint256", name: "amountADesired", type: "uint256" },
          { internalType: "uint256", name: "amountBDesired", type: "uint256" },
          { internalType: "uint256", name: "amountAMin", type: "uint256" },
          { internalType: "uint256", name: "amountBMin", type: "uint256" },
          { internalType: "address", name: "receiver", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        internalType: "struct MonadexV1Types.AddLiquidity",
        name: "_addLiquidityParams",
        type: "tuple",
      },
    ],
    name: "addLiquidity",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          {
            internalType: "uint256",
            name: "amountTokenDesired",
            type: "uint256",
          },
          { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountNativeTokenMin",
            type: "uint256",
          },
          { internalType: "address", name: "receiver", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        internalType: "struct MonadexV1Types.AddLiquidityNative",
        name: "_addLiquidityNativeParams",
        type: "tuple",
      },
    ],
    name: "addLiquidityNative",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountOut", type: "uint256" },
      { internalType: "uint256", name: "_reserveIn", type: "uint256" },
      { internalType: "uint256", name: "_reserveOut", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "numerator", type: "uint256" },
          { internalType: "uint256", name: "denominator", type: "uint256" },
        ],
        internalType: "struct MonadexV1Types.Fraction",
        name: "_poolFee",
        type: "tuple",
      },
    ],
    name: "getAmountIn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountIn", type: "uint256" },
      { internalType: "uint256", name: "_reserveIn", type: "uint256" },
      { internalType: "uint256", name: "_reserveOut", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "numerator", type: "uint256" },
          { internalType: "uint256", name: "denominator", type: "uint256" },
        ],
        internalType: "struct MonadexV1Types.Fraction",
        name: "_poolFee",
        type: "tuple",
      },
    ],
    name: "getAmountOut",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountOut", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
    ],
    name: "getAmountsIn",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountIn", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
    ],
    name: "getAmountsOut",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFactory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaffle",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWNative",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountA", type: "uint256" },
      { internalType: "uint256", name: "_reserveA", type: "uint256" },
      { internalType: "uint256", name: "_reserveB", type: "uint256" },
    ],
    name: "quote",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_tokenA", type: "address" },
      { internalType: "address", name: "_tokenB", type: "address" },
      { internalType: "uint256", name: "_lpTokensToBurn", type: "uint256" },
      { internalType: "uint256", name: "_amountAMin", type: "uint256" },
      { internalType: "uint256", name: "_amountBMin", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
    ],
    name: "removeLiquidity",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_lpTokensToBurn", type: "uint256" },
      { internalType: "uint256", name: "_amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "_amountNativeMin", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
    ],
    name: "removeLiquidityNative",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "uint256", name: "lpTokensToBurn", type: "uint256" },
          { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
          { internalType: "uint256", name: "amountNativeMin", type: "uint256" },
          { internalType: "address", name: "receiver", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "bool", name: "approveMax", type: "bool" },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct MonadexV1Types.RemoveLiquidityNativeWithPermit",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "removeLiquidityNativeWithPermit",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "tokenA", type: "address" },
          { internalType: "address", name: "tokenB", type: "address" },
          { internalType: "uint256", name: "lpTokensToBurn", type: "uint256" },
          { internalType: "uint256", name: "amountAMin", type: "uint256" },
          { internalType: "uint256", name: "amountBMin", type: "uint256" },
          { internalType: "address", name: "receiver", type: "address" },
          { internalType: "uint256", name: "deadline", type: "uint256" },
          { internalType: "bool", name: "approveMax", type: "bool" },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        internalType: "struct MonadexV1Types.RemoveLiquidityWithPermit",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "removeLiquidityWithPermit",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "enter", type: "bool" },
          {
            components: [
              { internalType: "uint256", name: "numerator", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            internalType: "struct MonadexV1Types.Fraction",
            name: "fractionOfSwapAmount",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "raffleNftReceiver",
            type: "address",
          },
        ],
        internalType: "struct MonadexV1Types.Raffle",
        name: "_raffle",
        type: "tuple",
      },
    ],
    name: "swapExactNativeForTokens",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountIn", type: "uint256" },
      { internalType: "uint256", name: "_amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "enter", type: "bool" },
          {
            components: [
              { internalType: "uint256", name: "numerator", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            internalType: "struct MonadexV1Types.Fraction",
            name: "fractionOfSwapAmount",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "raffleNftReceiver",
            type: "address",
          },
        ],
        internalType: "struct MonadexV1Types.Raffle",
        name: "_raffle",
        type: "tuple",
      },
    ],
    name: "swapExactTokensForNative",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountIn", type: "uint256" },
      { internalType: "uint256", name: "_amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "enter", type: "bool" },
          {
            components: [
              { internalType: "uint256", name: "numerator", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            internalType: "struct MonadexV1Types.Fraction",
            name: "fractionOfSwapAmount",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "raffleNftReceiver",
            type: "address",
          },
        ],
        internalType: "struct MonadexV1Types.Raffle",
        name: "_raffle",
        type: "tuple",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountOut", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "enter", type: "bool" },
          {
            components: [
              { internalType: "uint256", name: "numerator", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            internalType: "struct MonadexV1Types.Fraction",
            name: "fractionOfSwapAmount",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "raffleNftReceiver",
            type: "address",
          },
        ],
        internalType: "struct MonadexV1Types.Raffle",
        name: "_raffle",
        type: "tuple",
      },
    ],
    name: "swapNativeForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountOut", type: "uint256" },
      { internalType: "uint256", name: "_amountInMax", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "enter", type: "bool" },
          {
            components: [
              { internalType: "uint256", name: "numerator", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            internalType: "struct MonadexV1Types.Fraction",
            name: "fractionOfSwapAmount",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "raffleNftReceiver",
            type: "address",
          },
        ],
        internalType: "struct MonadexV1Types.Raffle",
        name: "_raffle",
        type: "tuple",
      },
    ],
    name: "swapTokensForExactNative",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amountOut", type: "uint256" },
      { internalType: "uint256", name: "_amountInMax", type: "uint256" },
      { internalType: "address[]", name: "_path", type: "address[]" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
      {
        components: [
          { internalType: "bool", name: "enter", type: "bool" },
          {
            components: [
              { internalType: "uint256", name: "numerator", type: "uint256" },
              { internalType: "uint256", name: "denominator", type: "uint256" },
            ],
            internalType: "struct MonadexV1Types.Fraction",
            name: "fractionOfSwapAmount",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "raffleNftReceiver",
            type: "address",
          },
        ],
        internalType: "struct MonadexV1Types.Raffle",
        name: "_raffle",
        type: "tuple",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

export const monadexfaucetABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "neededRole", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "IMonadexV1Faucet__InvalidFaucet", type: "error" },
  {
    inputs: [],
    name: "IMonadexV1Faucet__InvalidFaucetCreationParams",
    type: "error",
  },
  {
    inputs: [],
    name: "IMonadexV1Faucet__InvalidFaucetUpdateParams",
    type: "error",
  },
  {
    inputs: [],
    name: "IMonadexV1Faucet__NotEligibleToCollectFromFaucet",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "by", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "CollectedTokensFromFaucet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "by", type: "address" },
      {
        components: [
          { internalType: "string", name: "tokenName", type: "string" },
          { internalType: "string", name: "tokenSymbol", type: "string" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "uint256", name: "interval", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountToEmitAtEachInterval",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct IMonadexV1Faucet.FaucetDetails",
        name: "faucetDetails",
        type: "tuple",
      },
    ],
    name: "FaucetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "by", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "newInterval",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newAmountToCollectEachInterval",
        type: "uint256",
      },
    ],
    name: "FaucetUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FAUCET_MANAGER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "address", name: "_to", type: "address" },
    ],
    name: "collectTokensFromFaucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "string", name: "tokenName", type: "string" },
          { internalType: "string", name: "tokenSymbol", type: "string" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "uint256", name: "interval", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountToEmitAtEachInterval",
            type: "uint256",
          },
        ],
        internalType: "struct IMonadexV1Faucet.FaucetDetails",
        name: "_faucetDetails",
        type: "tuple",
      },
    ],
    name: "createFaucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTokens",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_token", type: "address" }],
    name: "getFaucetDetails",
    outputs: [
      {
        components: [
          { internalType: "string", name: "tokenName", type: "string" },
          { internalType: "string", name: "tokenSymbol", type: "string" },
          { internalType: "uint256", name: "decimals", type: "uint256" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "uint256", name: "interval", type: "uint256" },
          {
            internalType: "uint256",
            name: "amountToEmitAtEachInterval",
            type: "uint256",
          },
        ],
        internalType: "struct IMonadexV1Faucet.FaucetDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "address", name: "_token", type: "address" },
    ],
    name: "isEligibleToCollect",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "callerConfirmation", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_interval", type: "uint256" },
      {
        internalType: "uint256",
        name: "_amountToEmitAtEachInterval",
        type: "uint256",
      },
    ],
    name: "updateFaucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
