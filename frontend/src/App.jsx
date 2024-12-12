import React,{useEffect,useState} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from "./Layout";
import { Welcome,WalletView, Createwallet,Recoverwallet} from './components/index';


const App = () => {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {path:"walletview",
         element:<WalletView 
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
         />
        },
        {path:"",
          element:<Welcome />
         },
         {path:"createwallet",
          element:<Createwallet
          setSeedPhrase={setSeedPhrase}
          setWallet={setWallet}
          />
         },
         {path:"recoverwallet",
          element:<Recoverwallet
          setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
          />
         },
      ]

      
    }
  ])

  return (
    <RouterProvider router={router} />
  )
};

export default App;

{/* <div className="min-h-screen">
  //   <div className="gradient-bg-welcome">
  //     <Navbar />
  //     <Welcome />
  //   </div>
  //   <Services />
  //   <Transactions />
  //   <Footer />
  // </div> */}