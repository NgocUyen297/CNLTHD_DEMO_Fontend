import { useContext } from "react"
import { userContext } from "./MainApp"

const UserInfo = () => {
    const [user, dispatch] = useContext(userContext)
    if(user == null){
        return <h1>Chua Dang Nhap</h1>
    }

    return (
        <>
            <h1>Welcome {user.name}</h1>
        </>
    )
}

export default UserInfo