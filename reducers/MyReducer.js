// const myReducer = (state, action) => {
//     switch(action.type) {
//         case 'inc':
//             return {'counter': state.counter + 1}  
//         case 'des':
//             return {'counter': state.counter - 1}

//     }

//     return state
// }
// export default myReducer

const userReducer = (user, action) => {
    switch(action.type) {
        case 'login':
            return action.payload
        case 'logout':
            return null

    }
    return user
}

export default userReducer