import express from "express";
import { Wallet } from "ethers";
import CryptoJS from "crypto-js";

const router = express.Router();

// Endpoint to generate a wallet and seed phrase
router.get("/generate-wallet", (req, res) => {
  const wallet = Wallet.createRandom();
  const seedPhrase = wallet.mnemonic.phrase;
  res.json({ seedPhrase, address: wallet.address });
});

// Endpoint to hash a seed phrase
router.post("/hash-seed", (req, res) => {
  const { seedPhrase } = req.body;

  if (!seedPhrase) {
    return res.status(400).json({ error: "Seed phrase is required" });
  }

  const hashedSeed = CryptoJS.SHA256(seedPhrase).toString();
  res.json({ hashedSeed });
});

export default router;
