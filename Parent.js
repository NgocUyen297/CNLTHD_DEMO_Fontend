import { createContext, useState } from "react"
import Child from "./Child"

export const MyContext = createContext()

const Parent = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    return (
        <MyContext.Provider value={name}>
            <h1>Parent Age {age}</h1>
            <div>
                <input value={name} onChange={(event) => {setName(event.target.value)}} />
            </div>
            <Child />
        </MyContext.Provider>
    )
}

export default Parent