import React, { useState } from 'react'
import axios from 'axios';
import { Input } from "./index"
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
function Createwallet(
    { setWallet, setSeedPhrase }
) {
    const [newSeedPhrase, setNewSeedPhrase] = useState("");
    const [hashedSeedPhrase, setHashedSeedPhrase] = useState(""); // State to store hashed seed phrase
    const navigate = useNavigate();

    // Generate wallet and fetch seed phrase from backend
    async function generateWallet() {
        try {
            const response = await axios.get(`https://decenteralised-wallet.vercel.app/api/v1/generate-wallet`);
            setNewSeedPhrase(response.data.seedPhrase);
            // setWallet(response.data.address);
            setHashedSeedPhrase(""); // Reset hashed seed phrase
            return response.data.seedPhrase;
        } catch (error) {
            console.error("Error generating wallet:", error);
        }
    }

    // Hash seed phrase by sending it to the backend
    async function hashSeedPhrase(seedphrase) {
        if (!seedphrase) {
            console.error("No seed phrase generated yet!");
            return;
        }

        try {
            
            const response = await axios.post(`https://decenteralised-wallet.vercel.app/api/v1/hash-seed`, {
                seedPhrase: seedphrase,
            });
            setHashedSeedPhrase(response.data.hashedSeed);
        } catch (error) {
            console.error("Error hashing seed phrase:", error);
        }
    }

    async function handleGenerateAndHash() {
        const seedphrase=await generateWallet(); // Step 1: Generate Wallet
        
        if (seedphrase) {
           
            await hashSeedPhrase(seedphrase); // Step 2: Hash Seed Phrase
        }
    }

    function setWalletAndMnemonic() {
        console.log("hey")
        setSeedPhrase(newSeedPhrase);
        setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address);
        navigate("/walletview")
      }

    return (
        <div className="bg-black">




            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Boost your productivity. Start using our app today.
                        </h2>
                        <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                            Once you generate the seed phrase, save both seed phrase and hash seed securely in order to
                            recover your wallet in the future.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <button
                                type="primary"
                                onClick={handleGenerateAndHash}
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Generate Seed Phrase
                            </button>
                            <button
                                type="default"
                                onClick={setWalletAndMnemonic}
                                className="text-sm/6 font-semibold text-white">
                                Open Your New Wallet <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto max-w-md items-center  justify-center  ">
                        <div >
                            <Input
                                id="Seed Pharse"
                                readOnly
                                placeholder="Seed Phrase"
                                value={newSeedPhrase}
                                onChange={(e) => setNewSeedPhrase(e.target.value)} 
                            />


                        </div>
                        <div >
                            <Input
                                id='Hasded Seed'
                                readOnly
                                placeholder="Hashed Seed Phrase"
                                value={hashedSeedPhrase}
                                onChange={(e) => setHashedSeedPhrase(e.target.value)} 
                            />


                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Createwallet
