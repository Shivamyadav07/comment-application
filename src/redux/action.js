import axios from "axios"
import { GET_COMMENT_FAILURE, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS } from "./actionTypes";

export const getcomment=()=>(dispatch)=>{
    dispatch({
        type:GET_COMMENT_REQUEST,
        payload:true
    })
    axios.get("http://localhost:3000/comment")
    .then((res)=>{
        console.log(res);
        dispatch({
            type:GET_COMMENT_SUCCESS,
            payload:res
        })
    })
    .catch((err)=>{
        console.log(err.message,'error');
        dispatch({
            type:GET_COMMENT_FAILURE,
            payload:true
        })
    })
}