import React, { useEffect, useState } from 'react';
import data from '../database/data.js';
import { useDispatch } from 'react-redux';
import * as Action from '../redux/Question_Reducer.js';

function useFetchQuestion() {
  const dispatch = useDispatch();

  const [getdata, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
            console.log("setted the data")
            setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: question,
          }));
          dispatch(Action.startExamAction(question));
        } else {
            console.log("lonegth==0")
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
    console.log(error)
  }
}
export const MovePrevAction = () => async(dispatch) => {
  try {
    dispatch(Action.movePrevAction())
  } catch (error) {
    console.log(error)
  }
}