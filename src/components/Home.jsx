import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
function Home() {
  const inputref = useRef(null)
  return (
    <>

      <div>
        <h1>Quiz Application </h1>

        <ol>
          <li> you have 10 questions </li>
          <li> 10 points , 1 point each question </li>
          <li> every question a\has three options </li>
          <li>can riview and change the answers </li>
          <li> result is declared at end of quiz </li>
        </ol>

        <form id="form ">
          <input ref={inputref} type="text" placeholder='Username' required />
        </form>
        <div>
          <Link to={'quiz'}> start quiz</Link>
        </div>
      </div>

    </>
  )
}

export default Home