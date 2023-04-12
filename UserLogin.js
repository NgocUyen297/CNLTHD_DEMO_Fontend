import {useContext, useState} from 'react'
import { userContext } from './MainApp'

const UserLogin = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [user,dispatch] = useContext(userContext)


    const login = (event) => {
        event.preventDefault()

        if(username == 'admin' && password =='123'){
            dispatch({
                'type':'login',
                'payload': {
                    'name': 'ngoc', 
                    'username': 'admin'
                }
            })
        }
    }

    const logout = (event) => {
        dispatch({'type':'logout'})
    }

    if (user == null)
    {
        return (
            <>
                <h1>Nguoi dung chua dang nhap</h1>
                <form onSubmit={login}>
                    <input  value={username}type='text' placeholder='Nhap username' onChange={(event)=>setUsername(event.target.value)} />
                    <input value={password} type='password' placeholder='Nhap password' onChange={(event)=>setPassword(event.target.value)} />
                    <input type='submit' value='Dang nhap'/>
                </form>
            </>
        )
    }

    return (
        <>
            <h1>Da dang nhap voi username: {user.username}</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
    
}

export default UserLogin