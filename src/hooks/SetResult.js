// import { Dispatch } from "@reduxjs/toolkit";
import * as Action from "../redux/Result_Reducer.js"

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch (Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}