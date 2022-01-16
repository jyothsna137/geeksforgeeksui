import { createContext, useRef, useState } from "react";
import Context from "./Context";
import FuncProps from "./FuncProps";

export const tokenContext = createContext<string>("");

export default function Hooks(){
    const [name, setName] = useState<string>("");
    const [num, setNum] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <input type="text" onChange={e => setName(e.target.value)}></input>
            <label>{`hello ${name}`}</label>
            <button onClick={_e => setNum(num+1)}>increment by 1</button>
            <label>{num}</label>
            <FuncProps init ={5}/>
            <FuncProps init ={50}/>
            <input type="text" ref={inputRef} onChange={e => alert(inputRef.current?.value)}></input>
            <tokenContext.Provider value={name}>
                <Context /> {/*pass data from hooks to context */}
            </tokenContext.Provider>
        </>
    )
}