import { useState } from 'react'
// import './App.css'
// import './styles/App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Result from './components/Result.jsx'
import Layouts from './Layouts.jsx'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import { CheckUserExist } from './helper/Helper.jsx'

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
          path : 'quiz',
          element : <CheckUserExist> < Quiz /> </CheckUserExist>
        },
        {
          path : 'result',
          element : <CheckUserExist><Result/></CheckUserExist>
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
