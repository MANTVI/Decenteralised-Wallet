import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
function Recoverwallet({ setWallet, setSeedPhrase }) {
    const navigate = useNavigate();
    const [typedSeed, setTypedSeed] = useState("");
    const [nonValid, setNonValid] = useState(false);

    function seedAdjust(e) {
        setNonValid(false);
        setTypedSeed(e.target.value);
      }
    
      function recoverWallet() {
        let recoveredWallet;
        try {
          recoveredWallet = ethers.Wallet.fromPhrase(typedSeed);
        } catch (err) {
          setNonValid(true);
          return;
        }
    
        setSeedPhrase(typedSeed);
        setWallet(recoveredWallet.address);
        navigate("/walletview");
        return;
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
                            Recover Your Wallet - Secure, Fast, Reliable.
                        </h2>
                        <p className="mt-6 text-pretty text-lg/8 text-gray-300">

                            "Regain Access to Your Digital Assets" offers a quick and secure way to recover lost or inaccessible wallets. With a simple, user-friendly process, it ensures the protection of your sensitive information. Experience peace of mind with a reliable, encrypted solution for your digital security.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <button
                                type="primary"
                                onClick={() => recoverWallet()}
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Recover Your Wallet
                            </button>

                        </div>
                    </div>
                    <div className="flex flex-col mx-auto max-w-md items-center  justify-center  ">
                        <div className="bg-transparent w-[520px] h-60 px-4 py-2 lg:mt-8 relative border border-white">
                            <textarea
                                value={typedSeed}
                                onChange={seedAdjust}
                                id="Seed Phrase"
                                placeholder="Type your seed phrase in the field  to recover your wallet (it should include 12 words seperated with spaces)"

                                className="bg-transparent text-white h-48 w-[400px] outline-none lg:mt-4 break-words overflow-wrap"

                              
                            />



                        </div>
                        {nonValid && <p style={{ color: "red" }}> Invalid Seed Phrase</p>}
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Recoverwallet
