import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authAPI, endpoint } from '../configs/API';
import API from '../configs/API';
import cookies from 'react-cookies'
import { UserContext } from '../MyContext';
import { Navigate } from 'react-router-dom';
import Loading from '../layouts/Loading';

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const [user, dispatch] = useContext(UserContext)


    const login = (event) => {
        event.preventDefault()
        const process = async () => {
            try{
                if(username === '' || password === '' || username == undefined ||password == undefined){
                    setErrors([...errors, 'Username và password không được rỗng.'])
                    return;
                }
                let res = await API.post(endpoint['login'], {
                    "username": username,
                    "password": password,
                    "client_id": "Vbe8euZZQJoWJ2UzW9wDThg4hJEZHHbhFmnfj7UR",
                    "client_secret": "cVm4w4hSdy4MtwbP4KuNgXkGPeQJ9yrQdBvXHGR6b3e97F2bYqQ81XJ49FEufzjcw4SKwpuOZQiCLsNelHY1MkuYTGBRcSqtWmSlebSUk27WfyDskCB2VeCQihnEKdZ2",
                    "grant_type": "password"
                })
                console.info(res.data)
                cookies.save('access-token', res.data.access_token)
                let user = await authAPI().get(endpoint['current-user'])
                cookies.save('current-user', user.data)
                dispatch({
                    'type':'login',
                    'payload':user.data
                })
            }catch(ex){
                setErrors([...errors,'Username hoặc password không chính xác'])
    
            }finally{
                setLoading(false)
            }
        }
        setLoading(true)
        process()
    }

    if(user !== null){
        return <Navigate  to='/'/>
    }

    let err = ''
    if(errors.length >0) {
        err = <ul>
            {errors.map((e, idx) =><li key={idx}>{e}</li> )}
            </ul>
    } 

    return (
        <>
            <h1 className='text-center text-success'>Đăng nhập người dùng</h1>
            {err}
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên đăng nhập" 
                                value={username}
                                onChange={(event)=>setUsername(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu: </Form.Label>
                    <Form.Control type="password" placeholder="Nhập mật khẩu" 
                                    value={password}
                                    onChange={(event)=>setPassword(event.target.value)}
                    />
                </Form.Group>
                {loading?<Loading />: <Button variant="primary" type="submit">Đăng nhập</Button> }
            </Form>
        </>
    )
}

export default Login