import { useEffect, useState } from "react";

export default function ComponentDidUpdate(){
    const [todoID, setToDoID] = useState<number>(1);
    const [title,setTitle] = useState<string>("");
    useEffect(() => {
        async function api(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`);
            const json = await response.json();
            setTitle(json.title);
        }
        api();
    },[todoID]);
    return(
        <>
        <input type="text" onChange={(e) => setToDoID(parseInt(e.target.value))}/>
        <label>{title}</label>
        </>
    );
}