import React from 'react'
import { useState } from 'react'

const DemoApp2 = ()=> {
    const  [user, setUser] = useState({
        'firstName': 'Ngoc',
        'lastName': 'Uyen'
    })
    
    const changeFn = ()=> {
         setUser({
            ...user,
            'firstName':'Hong'
         })
    }

    const changeLn = () => {
        setUser({
            ...user,
            'lastName':'Tran'
        })
    }
        return (
            <>
            <h1>WELCOME TO MY COMPONENT{user.firstName} {user.lastName}</h1>
            <input type='button' onClick={changeFn} value='Change First Name'/>
            <input type='button' onClick={changeLn} value='Change Last Name'/>
            </>
        )
}

export default DemoApp2