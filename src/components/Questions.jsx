import React, { useEffect, useState } from 'react';
import data from '../database/data.js';
function Questions() {
    const [checked, setChecked] = useState(undefined);

    const questions = data[0]

    useEffect(()=>{
        console.log(data)
    },[])

   function onSelect() {
//     if(!checked) setChecked(true)
//     else setChecked(false)
    // console.log("after setState", checked);
        console.log("reset button toggled at", Date.now())
  }

  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        <ul key={questions.id}>
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
