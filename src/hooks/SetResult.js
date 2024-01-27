// import { Dispatch } from "@reduxjs/toolkit";
import * as Action from "../redux/Result_Reducer.js"
import { postServerData } from "../helper/Helper.jsx"

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch (Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}


export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if(result.length===0 && !username) throw new Error("Couldn't get Result");
            await postServerData("http://localhost:5000/api/result", resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}