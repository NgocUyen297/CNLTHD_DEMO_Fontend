import {useEffect, useState} from 'react';
import { endpoint } from '../configs/API';
import API from '../configs/API';
import React from 'react'
import Loading from '../layouts/Loading';
import { useParams } from 'react-router-dom';

const LessonDetail = () => {
    const [detail, setDetail] = useState(null)
    const {lessonId} = useParams() 
    
    useEffect(()=>{
        const loadDetail = async () => {
            let res = await API.get(endpoint['lesson-detail'](lessonId))
            setDetail(res.data)
       }
        loadDetail()
    },[])

    if(detail === null)
    {
        return <Loading />
    }

    return (
        <>
            <h1 className='text-center text-success'>{detail.subject}</h1>
            <img width={200} src={detail.image} />
            <p dangerouslySetInnerHTML={{__html:detail.content}} ></p>
        </>
    )
}

export default LessonDetail