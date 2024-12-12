const Ethereum = {
    hex: "0x1",
    name: "Ethereum",
    rpcUrl: "",
    ticker: "ETH",
  };
  
  const BNBTestnet = {
    hex: "0x61",
    name: "BNB Testnet",
    rpcUrl: "https://bsc-testnet-rpc.publicnode.com",
    ticker: "tBNB",
  };
  const Sepolia = {
    hex: "0xaa36a7", // Chain ID for Sepolia
    name: "Sepolia",
    rpcUrl: "https://rpc.sepolia.org", // Add your Infura project ID or use a public RPC URL
    ticker: "SepoliaETH",
  };
  const Avalanche = {
    hex: "0xa86a", // Chain ID for Avalanche C-Chain
    name: "Avalanche",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc", // Public RPC URL for Avalanche
    ticker: "AVAX",
  };
  
  export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x61": BNBTestnet,
    "0xaa36a7": Sepolia, // Add Sepolia to the config
    "0xa86a": Avalanche,
  };
  