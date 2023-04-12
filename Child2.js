import { useContext, useState } from "react";
import { MyContext } from "./Parent";

const Child2 = () => {
    const hello = useContext(MyContext) // khai báo name trùng
    return (
        <>
            <h1>Welcome Child2 {hello} </h1>
        </>
    )
}

export default Child2