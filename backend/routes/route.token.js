import { Router } from "express";
import Moralis from "moralis";

const router = Router();

router.get("/getTokens", async (req, res) => {
  const { userAddress, chain } = req.query;

  try {
    const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: chain,
      address: userAddress,
    });

    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: chain,
      address: userAddress,
      mediaItems: true,
    });

    const myNfts = nfts.raw.result.map((e) => {
      if (
        e?.media?.media_collection?.high?.url &&
        !e.possible_spam &&
        e?.media?.category !== "video"
      ) {
        return e["media"]["media_collection"]["high"]["url"];
      }
    });

    const balance = await Moralis.EvmApi.balance.getNativeBalance({
      chain: chain,
      address: userAddress,
    });

    const jsonResponse = {
      tokens: tokens.raw,
      nfts: myNfts,
      balance: balance.raw.balance / 10 ** 18,
    };

    return res.status(200).json(jsonResponse);
  } catch (error) {
    console.error("Error fetching token data:", error);
    return res.status(500).json({ error: "Failed to fetch token data" });
  }
});

export default router;
