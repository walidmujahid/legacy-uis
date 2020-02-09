export const MAINNET = {
  tokenAddresses: {
    addresses: [
      ["sEUR", "0xD71eCFF9342A5Ced620049e616c5035F1dB98620"],
      ["sUSD", "0x57ab1e02fee23774580c119740129eac7081e9d3"],
      ["USDC", "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"],
      ["DAI", "0x6B175474E89094C44Da98b954EedeAC495271d0F"],
      ["wETH", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
    ],
  },
  tokenAddressesToSymbols: {
    ["0xD71eCFF9342A5Ced620049e616c5035F1dB98620", "sEUR"],
    ["0x57ab1e02fee23774580c119740129eac7081e9d3", "sUSD"],
    ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "USDC"],
    ["0x6B175474E89094C44Da98b954EedeAC495271d0F", "DAI"],
    ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "wETH"],
  },
  sablierAddress: "0xA4fc358455Febe425536fd1878bE67FfDBDEC59a",
};

export const GOERLI = {
  tokenAddresses: {
    addresses: [["DAI", "0xF2D1F94310823FE26cFa9c9B6fD152834b8E7849"]],
  },
  tokenAddressesToSymbols: {
    "0xF2D1F94310823FE26cFa9c9B6fD152834b8E7849": "DAI",
  },
  sablierAddress: "0xc04Ad234E01327b24a831e3718DBFcbE245904CC",
};

export const KOVAN = {
  tokenAddresses: {
    addresses: [["DAI", "0x7d669a64deb8a4a51eea755bb0e19fd39ce25ae9"]],
  },
  tokenAddressesToSymbols: {
    "0x7d669a64deb8a4a51eea755bb0e19fd39ce25ae9": "DAI",
  },
  sablierAddress: "0xc04Ad234E01327b24a831e3718DBFcbE245904CC",
};

export const RINKEBY = {
  tokenAddresses: {
    addresses: [["DAI", "0xc3dbf84abb494ce5199d5d4d815b10ec29529ff8"]],
  },
  tokenAddressesToSymbols: {
    "0xc3dbf84abb494ce5199d5d4d815b10ec29529ff8": "DAI",
  },
  sablierAddress: "0xc04Ad234E01327b24a831e3718DBFcbE245904CC",
};

export const ROPSTEN = {
  tokenAddresses: {
    addresses: [["DAI", "0x2d69ad895797c880abce92437788047ba0eb7ff6"]],
  },
  tokenAddressesToSymbols: {
    "0x2d69ad895797c880abce92437788047ba0eb7ff6": "DAI",
  },
  sablierAddress: "0xc04Ad234E01327b24a831e3718DBFcbE245904CC",
};

export const ACCEPTED_TOKENS = ["sEUR", "sUSD", "USDC", "DAI", "wETH"];
export const DEFAULT_TOKEN_SYMBOL = "DAI";
