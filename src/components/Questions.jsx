import React, { useEffect, useState } from 'react';
// import data from '../database/data.js';
import useFetchQuestion from '../hooks/FetchQuestion.js';
import { useSelector} from 'react-redux';


function Questions({onChecked}) {
    const [checked, setChecked] = useState(undefined);
    const [{ isLoading , apiData , serverError }] = useFetchQuestion()
    // const questions = data[0]

    const  questions  = useSelector(state => state.questions.queue[state.questions.trace]);
    const  trace  = useSelector(state => state.questions.trace);


    // const;

    useEffect(() => {
        // console.log("   trace    ",trace)
    },)

    useEffect(()=>{
        // // console.log(isLoading,"iuhue")
        // // console.log(apiData)
        // // console.log(serverError)
        // // console.log("questions",questions)

    },[isLoading,apiData,serverError])

   function onSelect(i) {
//     if(!checked) setChecked(true)
//     else setChecked(false)
    // // console.log("after setState", checked);
        // console.log( i," ", Date.now())
        onChecked(i)
  }

  if(isLoading) return <h1>loading</h1>
  if(serverError) return  <h1>{`${serverError}|| "unknown error`}</h1>

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />

                        <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                        {/* <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> */}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Questions;
