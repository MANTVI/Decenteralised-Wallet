import React, { useState } from 'react';

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
                Move Crypto
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
            <div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-3xl font-bold">$0.00</div>
                <div className="text-red-500">(0.00%)</div>
              </div>
              <div className="mt-4">
                <ul className="flex space-x-4">
                  <li className="border-b-2 border-blue-500 pb-2">Tokens</li>
                  <li className="pb-2">NFTs</li>
                  <li className="pb-2">DeFi</li>
                  <li className="pb-2">Transactions</li>
                  <li className="pb-2">Spending Caps</li>
                </ul>
              </div>
              <div className="mt-4 flex space-x-4">
                <div className="bg-gray-700 p-2 rounded-lg">2 Accounts</div>
                <div className="bg-gray-700 p-2 rounded-lg">7 Networks</div>
                <div className="bg-gray-700 p-2 rounded-lg">More</div>
              </div>
              <div className="mt-4 text-center">
                <p>No Tokens to Show</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
                  Token Marketplace
                </button>
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
