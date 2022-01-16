import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom"
import"./index.css"

// export default function helloWorld(){
// return (
//     <>
//     <div>Hello Jyothsna</div>
//     <button onClick ={ ()=> alert("Hello World")}>Click me</button>
//     </>
// );
// export default class MyClass extends React.Component{
//     render(){
//         return(
//         <div>Render Jyothsna</div>
//         );
//     }
// }
export default ReactDOM.render(
    React.createElement("h1",{style: {color: "blue"}},"Hello"),
    document.getElementById("root")
);
