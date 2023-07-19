import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcomment } from '../redux/action';

export const Comment = () => {
    const dispatch = useDispatch();
    const comment=useSelector((state)=>state.comment);
    console.log(comment);
    useEffect(() => {
        dispatch(getcomment());
    },[])

    return (
        <div>
            {/* comment.map((e)=>{
                
            }) */}
        </div>
    )
}
