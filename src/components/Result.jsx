import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch } from 'react-redux'

import {setUserId, pushResultAction, resetResultAction} from '../redux/Result_Reducer.js'
import {startExamAction , moveNextAction , movePrevAction, resetAllAction} from '../redux/Question_Reducer.js'
function Result() {

const dispatch = useDispatch()

  function onRestart(){
    console.log("restarting the quiz")
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }
  return (
    <>
    <div>
      <h1>Quiz Application</h1>
      <div>
        <div>
          <span> Username </span>
          <span>Daily na</span>
        </div>
        <div>
          <span> total quiz points </span>
          <span>10</span>
        </div>
        <div>
          <span> total attempts </span>
          <span>3</span>
        </div>
        <div>
          <span> Total earn points  </span>
          <span>45</span>
        </div>
        <div>
          <span> Quiz Result  </span>
          <span>Passed</span>
        </div>
      </div>
      <div>
        <Link to="/" onClick={onRestart}>Restart</Link>
      </div>
    </div>
    </>
  )
}

export default Result