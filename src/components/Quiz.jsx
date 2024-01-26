import React, { useEffect,useState } from 'react'
import Questions from './Questions.jsx'
import { useSelector ,useDispatch} from 'react-redux'
import { MoveNextQuestion , MovePrevAction } from '../hooks/FetchQuestion.js';
import { PushAnswer } from '../hooks/SetResult.js'
import { Navigate } from 'react-router-dom' 


function Quiz() {
  const [check, setCheck] = useState()
  const result = useSelector(state => state.result.result)
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()
  // const  trace  = useSelector(state => state.questions.trace);


  useEffect(() => {
    // console.log("use selector(state)",state)
  })

  function onNext(){
    // console.log(state)

    console.log("next clicked")
    if(trace<queue.length){ dispatch(MoveNextQuestion())
    dispatch(PushAnswer(check))
    // console.log(state)
    }

  }
  function onPrevious(){
    if(trace >0) dispatch(MovePrevAction())
    console.log("previous clicked")
  }

  function onChecked(check){
    console.log(check)
    setCheck(check)
  }

  if(result.length && result.length === queue.length){
      return <Navigate to={ "/result" } replace={true} ></Navigate>
  }
  return (
    <>
        <div>
          <h1> Quiz Application </h1>
          <Questions  onChecked={onChecked}/>
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