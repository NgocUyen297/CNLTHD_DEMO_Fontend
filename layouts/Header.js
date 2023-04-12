import {useContext, useEffect, useState} from 'react';
import { endpoint } from '../configs/API';
import API from '../configs/API';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { UserContext } from '../MyContext';

const Header = () => {
    const [categories, setCategories] = useState([]) // nên để rỗng thay vì để null
    const [q, setQ] = useState('')
    const nav = useNavigate()
    const [user, dispatch] = useContext(UserContext)

    useEffect(()=>{
        const loadCategories = async () => {
            let res = await API.get(endpoint['categories'])
            setCategories(res.data)
        }

        loadCategories()
    },[])

    const search = (event) => {
        event.preventDefault()
        nav(`/?q=${q}`)
    }

    const logout = () => {
        dispatch({
            'type':'logout',
        })
    }

    let userInfo = (
        <>
            <Link to='/login' className='nav-link'>Đăng nhập</Link>
        </>
    )
    if(user != null){
        userInfo = (
            <>
                <Link to='/login' className='nav-link'>{user.username}</Link>
                <Button onClick={logout} className='nav-link'>Đăng xuất</Button>
            </>
        )
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    {categories.map(c =>{
                        let url = `/?cateId=${c.id}`
                        return <Link to={url} className='nav-link'>{c.name}</Link>
                    })}
                    {userInfo}
                </Nav>
                </Navbar.Collapse>
                <Form className="d-flex" onSubmit={search}>
                    <Form.Control
                        type='search'
                        placeholder='Ten khoa hoc...'
                        className='me-2'
                        aria-labels='Search'
                        value={q}
                        onChange={(event)=>setQ(event.target.value)}
                    />
                    <Button type='submit' variants='success'>Tìm</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default Header