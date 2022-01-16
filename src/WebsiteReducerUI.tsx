import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import "./App.css";

interface Iwebsite{
    website: string;
}
//component to insert data inside websitereducer and read it
export default function WebsiteReducerUI(){
    const dispatch = useDispatch();

    const websites: string[] = useSelector((state:AppState) => state.WebsiteReducer);

    useEffect(() => {
        async function api() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            dispatch({type: "WebsiteCompleted", payload:json.map((x:Iwebsite) => x.website)});
        }
        dispatch({type: "WebsiteStarted"});
        api();
    },[]);

    return(
        <>
            {websites.map((x,index) => <div key={index}>{x}</div>)}
        </>
    )
}