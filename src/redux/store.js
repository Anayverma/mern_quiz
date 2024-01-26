import { combineReducers, configureStore  } from '@reduxjs/toolkit'
import  questionReducer  from './Question_Reducer.js'
import  resultReducer  from './Result_Reducer.js' 

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

export default configureStore({
    reducer : rootReducer
})
