import {useEffect, useState} from 'react';
import { endpoint } from '../configs/API';
import API from '../configs/API';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import Item from '../layouts/Item';
import Loading from '../layouts/Loading';



const Course = () => {
    const [courses, setCourses] = useState(null)
    const [page, setPage] = useState(1)
    const [q] = useSearchParams()

    
    useEffect(()=>{
        const loadCourses = async () => {
            try{
                let e = `${endpoint['courses']}?page=${page}`

                let kw = q.get('q')
                if(kw !== null)
                {
                    e += `&q=${kw}`
                } 

                let cateId = q.get('cateId')
                if(cateId !== null)
                {
                    e += `&category_id=${cateId}`
                }

                let res = await API.get(e)
                setCourses(res.data.results)
            }catch(ex){
                setPage(1)
            }
       }
        setCourses(null)
        loadCourses()
    },[page, q])
    const nextPage = () =>    setPage(current => current + 1)
    const previousPage = () =>  setPage(current => current - 1)

    if(courses == null)
    {
        return  <Loading />
    }

    if(courses.length === 0)
    {
        return  <div className='alert alert-info'>Không có khóa học nào</div>
    }

    return(
        <>
            <Container>
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={previousPage} variant="secondary">&#9194;</Button>
                    <Button onClick={nextPage} variant="secondary">&#9193;</Button>
                </ButtonGroup>
                <Row>
                    {courses.map(c => <Item obj={c}/>)}
                </Row>
            </Container>
        </>
    )
}

export default Course