import React from 'react'
import Questions from './Questions.jsx'

function Quiz() {
  function onNext(){
    console.log("next clicked")
  }
  function onPrevious(){
    console.log("previous clicked")
  }
  return (
    <>
        <div>
          <h1> Quiz Application </h1>
          <Questions/>
          <button onClick={onPrevious}>
            Prev
          </button>
          <button onClick={onNext}>
            Next
          </button>
        </div>
    </>
  )
}

export default Quiz