import { createContext, useReducer } from "react"
import UserInfo from "./UserInfo"
import UserLogin from "./UserLogin"
import userReducer from "./reducers/MyReducer"
 export const userContext = createContext()

const MainApp = () => {
    const[user, dispatch] = useReducer(userReducer)

    return (
        <userContext.Provider value={[user, dispatch]}>
            <UserInfo />
            <UserLogin />
        </userContext.Provider>
    )
}

export default MainApp