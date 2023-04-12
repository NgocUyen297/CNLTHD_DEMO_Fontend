import { useReducer } from "react"
import myReducer from "./reducers/MyReducer"

const ReducerDemo = () => {
    const [state, dispatch] = useReducer(myReducer, {
        'counter': 0
    })

    return (
        <>
            <h1>Counter: {state.counter}</h1>
            <button onClick={()=> dispatch({'type': 'des'})}>-</button>
            <button onClick={() => dispatch({'type':'inc'})}>+</button>
        </>
    )
}

export default ReducerDemo