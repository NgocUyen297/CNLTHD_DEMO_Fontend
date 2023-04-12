import cookies from 'react-cookies';

const userReducer = (user, action) => {
    switch(action.type) {
        case 'login':
            return action.payload
        case 'logout':
            cookies.remove('access-token')
            cookies.remove('current-user')
            return null

    }
    return user
}

export default userReducer