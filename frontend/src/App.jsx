import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from "./Layout";
import { Welcome,Transactions } from './components/index';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {path:"transactions",
         element:<Transactions />
        },
        {path:"",
          element:<Welcome />
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