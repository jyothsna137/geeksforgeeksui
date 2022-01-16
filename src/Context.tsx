import { useContext } from "react";
import { tokenContext } from "./Hooks";

export default function Context(){
    /**Use a hook useCOntext to access value */
    const token = useContext(tokenContext);
    return <div>Context example</div>
}