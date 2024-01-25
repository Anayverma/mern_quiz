import { useState } from 'react'
// import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Result from './components/Result.jsx'
import Layouts from './Layouts.jsx'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'

// router 
const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <Layouts/>,
      children : [
        {
          path : '',
          element : <Home />
        },
        {
          path : '/quiz',
          element : < Quiz />
        },
        {
          path : '/result',
          element : <Result/>
        }
      ]
    }
  ]
)

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
