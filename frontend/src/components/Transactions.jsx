import React, { useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Transactions = () => {
  // State to manage the selected section
  const [selectedSection, setSelectedSection] = useState('Overview');

  // Function to handle button clicks and update context
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 bg-black text-white border-t-4 border-gray-400 ">
     

      <div className="w-full md:w-1/4 lg:w-1/5 bg-black p-4">
        <nav>
          <ul>
            <li className="py-2">
              <button 
                onClick={() => handleSectionChange('Overview')} 
                className="hover:text-gray-400 w-full text-left"
              >
                Overview
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleSectionChange('Move Crypto')} 
                className="hover:text-gray-400 w-full text-left"
              >
                Transactions
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleSectionChange('Tokens')} 
                className="hover:text-gray-400 w-full text-left"
              >
                Tokens
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleSectionChange('NFTs')} 
                className="hover:text-gray-400 w-full text-left"
              >
                NFTs
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleSectionChange('Dapps')} 
                className="hover:text-gray-400 w-full text-left"
              >
                Dapps
              </button>
            </li>
            <li className="py-2">
              <button 
                onClick={() => handleSectionChange('Games')} 
                className="hover:text-gray-400 w-full text-left"
              >
                Games
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-px bg-gray-400"></div>
      <main className="flex-1 p-4">
       
          <h1 className="text-xl font-bold">{selectedSection}</h1>

          {/* Conditionally rendering based on selectedSection */}
          {selectedSection === 'Overview' && (
            <div className='flex'>
              <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                {/* <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p> */}
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          
        </div>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text"  />
            <Input placeholder="Amount (ETH)" name="amount" type="number" />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" />
            <Input placeholder="Enter Message" name="message" type="text"  />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {/* {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )} */}
          </div>
          </div>
          )}

          {/* Add content for the 'Move Crypto' section */}
          {selectedSection === 'Move Crypto' && (
            <div>
              <h2 className="text-lg font-bold">Move Your Crypto</h2>
              <p className="mt-4">Transfer your crypto assets between wallets and exchanges securely.</p>
            </div>
          )}

          {/* Add content for the 'Tokens' section */}
          {selectedSection === 'Tokens' && (
            <div>
              <h2 className="text-lg font-bold">Your Tokens</h2>
              <p className="mt-4">Track and manage your token assets.</p>
            </div>
          )}

          {/* Add content for the 'NFTs' section */}
          {selectedSection === 'NFTs' && (
            <div>
              <h2 className="text-lg font-bold">Your NFTs</h2>
              <p className="mt-4">View and manage your non-fungible tokens.</p>
            </div>
          )}

          {/* Add content for the 'Dapps' section */}
          {selectedSection === 'Dapps' && (
            <div>
              <h2 className="text-lg font-bold">Decentralized Apps</h2>
              <p className="mt-4">Explore and interact with decentralized applications.</p>
            </div>
          )}

          {/* Add content for the 'Games' section */}
          {selectedSection === 'Games' && (
            <div>
              <h2 className="text-lg font-bold">Blockchain Games</h2>
              <p className="mt-4">Discover and play games built on blockchain technology.</p>
            </div>
          )}
       
      </main>
    </div>
  );
};

export default Transactions;
