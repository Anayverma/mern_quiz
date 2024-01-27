import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

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