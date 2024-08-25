// import { useState } from 'react'
import './App.css'
import RootLayout from './components/RootLayout.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      </Route>
    )
  )

  return (
    <>
      <h1>Cat Montoya</h1>
      <div>
      <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  )
}

export default App
