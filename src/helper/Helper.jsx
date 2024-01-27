import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import axios from 'axios'


export function attempts_Number (result){
    return result.filter(r => r!==undefined ).length
}

export function earnPoints_Number(result, answers, points){
    return result.map((res,i) => res === answers[i]? points : 0)
                 .reduce((prev,curr) => prev+curr, 0)   
}

export function flagResult (totalPoints, earnPoints,passingPercentage){
    return earnPoints > passingPercentage*totalPoints?"Pass":"Fail"
}

export function CheckUserExist({children}){
    const auth = useSelector(state => state.result.userId)
    return auth ? children :<Navigate to={"/"} replace={true}></Navigate>
}

export async function getServerData(url,callback){
    const data = await (await axios.get(url))?.data
    // console.log("data",data)
    return callback? callback(data):data;
}

export async function postServerData(url,result, callback){
    const data = await (await axios.post(url,result))?.data
    // console.log(data)
    return callback? callback(data):data;
}
// getServerData('http://localhost:5000/api/result')