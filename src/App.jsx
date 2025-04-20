import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import JobsPage from './Components/JobsPage';
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home></Home>
    },{
      path:"/search/jobs",
      element:<JobsPage></JobsPage>,
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
