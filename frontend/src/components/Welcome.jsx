import React, { useContext,useState } from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";
// import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";



const Welcome = () => {
  const navigate = useNavigate();
  const [createWallet, setcreateWallet] = useState(false)

  return (
    <div className="bg-black">
   
    <div className="flex w-full justify-center items-center ">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex md:flex-row flex-col flex-1 justify-start items-start  mf:mr-10 gap-[200px]">
          <div>
          <h1 className="text-xl sm:text-4xl text-white text-gradient py-1">
            Send Crypto across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!createWallet && (
            <button
              type="button"
              
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <button
              onClick={()=>navigate("/createwallet")}
              className="text-white text-base font-semibold">
                Create Wallet
              </button>
            </button>
          )}
          </div>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </div>
  );
};

export default Welcome;