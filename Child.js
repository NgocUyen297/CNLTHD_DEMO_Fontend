import { useState } from "react";
import Child2 from "./Child2";

const Child = (props) => {
    return (
        <>
            <h1>Child</h1>
            <Child2 name={props.name} />
        </>
    )
}

export default Child