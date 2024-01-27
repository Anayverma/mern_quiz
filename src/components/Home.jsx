import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { setUserId } from '../redux/Result_Reducer'
// import '../styles/Main.css'
function Home() {
  const inputref = useRef(null)
  const dispatch = useDispatch()
  function startQuiz(e) {
    if (inputref.current?.value) {
      dispatch(setUserId(inputref.current?.value))
    }
  }

  return (
    <>

      <div>
        {/* <h1>Quiz Application </h1> */}

        <ol>
          <li> 3 questions to be asked. </li>
          <li> 10 points each. </li>
          <li> Each question contains 4 options </li>
          <li>You are given a chance to review and change the answers </li>
          <li> Result will be declared at the end. </li>
        </ol>

        <form id="form ">
          <input ref={inputref} type="text" placeholder='Username' required />
        </form>
        <div>
          <Link to={'quiz'} onClick={startQuiz}> start quiz</Link>
        </div>
      </div>

    </>
  )
}

export default Home