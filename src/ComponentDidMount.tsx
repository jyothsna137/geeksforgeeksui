import { useEffect, useState } from "react";
import {Grid} from "@material-ui/core";
import "./App.css";

interface IUser{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}
//interface IState //Not required as we are using function based components

export default function ComponentDidMount(){
const [users, setUsers] = useState<IUser[]>([]); {/*useState: Returns a stateful value, and a function to update it. */}
const [isLoading, setLoading] = useState<boolean>(true);

useEffect(() =>{
    async function api() {
        const response = await fetch("https://reqres.in/api/users");
        const json = await response.json();
        setUsers(json.data);
        setLoading(false);
    }
    api();
},[]) //[] not dependent on any variable so will be called only once since second argument is an empty array.

if(isLoading == true){
    return <div>it is loading</div>
}else {
        return(
            <Grid>
                {users.map(renderUser)} {/*Display all the users data */}
            </Grid>
        )
    }
}
function renderUser(user: IUser): JSX.Element{
    return(
        //<div className="grid-tem" key={user.id}>
        <Grid item key={user.id} xs={2}>
            <img src={user.avatar} />
            <div>{user.email}</div>
            <div>{`${user.first_name}${user.last_name}`}</div>
        </Grid>
        //</div>
    )
}
