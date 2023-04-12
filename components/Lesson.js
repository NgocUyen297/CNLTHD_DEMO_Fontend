import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { endpoint } from '../configs/API';
import API from '../configs/API';
import Row from 'react-bootstrap/Row';
import Item from '../layouts/Item';

const Lesson = () => {
    const {courseId} = useParams() 
    const [lessons, setLesson] = useState([])

    useEffect(()=>{
        const loadLesson = async () => {
                let res = await API.get(endpoint['lessons'](courseId))
                setLesson(res.data)
       }
        loadLesson()
    },[])

    return (
            <>
                <h1>CHI TIET KHOA HOC {courseId}</h1>
                <Row>
                    {lessons.map(l => <Item key={l.id} type='lesson' obj={l}/>)}
                </Row>
            </>

    )
}

export default Lesson