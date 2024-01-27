import React, { useEffect, useState } from 'react';
// import data ,{ answers } from '../database/data.js';
import { useDispatch } from 'react-redux';
import * as Action from '../redux/Question_Reducer.js';
import { getServerData } from '../helper/Helper.jsx';
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';

// dotenv.config();

// const config = defineConfig({
//   // other configurations...
//   plugins: [react()],
// });
// export { config };

function useFetchQuestion() {
  const dispatch = useDispatch();

  const [getdata, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
// const apiUrl = process.env.REACT_APP_SERVER_HOSTNAME;

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        // let question = await data;
        const [{questions,answers}]= await getServerData("http://localhost:5000/api/questions",(data)=>data)
        // console.log({questions,answers})

        if (questions.length > 0) {
            // console.log("setted the data")
            setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: questions,
          }));
          dispatch(Action.startExamAction({question: questions,answers}));
        } else {
            // console.log("lonegth==0")
          throw new Error("NO QUESTION AVAILABLE --X ");
        }
      } catch (error) {
        // Combine multiple state updates into a single call to setGetData
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);

  // Instead of returning an array, return an object for better readability
  return [ getdata, setGetData ];
}

export default useFetchQuestion;

export const MoveNextQuestion = () =>async(dispatch)=> {
  try {
    dispatch(Action.moveNextAction())
  } catch (error) {
    // console.log(error)
  }
}
export const MovePrevAction = () => async(dispatch) => {
  try {
    dispatch(Action.movePrevAction())
  } catch (error) {
    // console.log(error)
  }
}