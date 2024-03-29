import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/Helper.jsx'
// import '../styles/Result.css';

import {setUserId, pushResultAction, resetResultAction} from '../redux/Result_Reducer.js'
import {startExamAction , moveNextAction , movePrevAction, resetAllAction} from '../redux/Question_Reducer.js'
import { usePublishResult } from '../hooks/SetResult.js'
function Result() {

const dispatch = useDispatch()
const { questions:{queue,answers}, result: {userId,result}} = useSelector(state => state)
const state= useSelector(state => state)


const points = 10;
const passPercentage = .40
const totolPoints = queue.length*points
const attempts = attempts_Number(result)
const earnPoints = earnPoints_Number(result,answers,points)
const flag = flagResult(totolPoints,earnPoints,passPercentage)
usePublishResult({result,
  username: userId ,
  attempts,
  points: earnPoints,
  achived: flag?"Passed": "Failed"
})

// // console.log({result,
//             username: userId ,
//             attempts,
//             points: earnPoints,
//             achived: flag?"Passed": "Failed"
//           })
  function onRestart(){
    // console.log("restarting the quiz")
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }
  useEffect(()=>{
    // console.log(userId)
  })
  return (
    <>
    <div>
      <h2>Quiz Result</h2>
      <div>
        <div>
          <span> Username ---</span>
          <span>{userId}</span>
        </div>
        <div>
          <span> Total Quiz Points  --- </span>
          <span>{totolPoints||0}</span>
        </div>
        <div>
          <span> Total Attempts --- </span>
          <span>{attempts||0}</span>
        </div>
        <div>
          <span> Total Earn Points  --- </span>
          <span>{earnPoints||0}</span>
        </div>
        <div>
          <span> Quiz Result  </span>
          <span>{flag}</span>
          <span>{flag==="Pass"? "✅":"❌"}</span>
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