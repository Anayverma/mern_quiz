import { createSlice } from "@reduxjs/toolkit";

const resultReducer = createSlice({
    name: "result",
    initialState: {
        userId: null,
        result: [],
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        pushResultAction: (state, action) => {
            state.result.push(action.payload)
        },
        resetResultAction : ()=>{
            return {
                userId: null,
                result: [],
            }
        }
    },
});

export const { setUserId, pushResultAction, resetResultAction } = resultReducer.actions;
export default resultReducer.reducer;
