import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AppState } from "./AppState";
import { completed, IUser, started } from "./UsersSlice";

export default function SliceUI(){

    const dispatch = useDispatch(); //insert query
    //const users: IStatussizedUser
    const users: IUser[] = useSelector((state:AppState) => state.UsersSlice);
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            //insert query
            dispatch(completed(json.data));
        }
        //insert query
        dispatch(started());
        api();
    },[dispatch])
    
    return(
            <Grid>
                {users.map(renderUser)} {/*Display all the users data */}
            </Grid>
        )
    }
    function renderUser(user: IUser): JSX.Element{
        return(
            //<div className="grid-tem" key={user.id}>
            <Grid item key={user.id} xs={2}>
                <img alt="geeksforgeeks" src={user.avatar} />
                <div>{user.email}</div>
                <div>{`${user.first_name}${user.last_name}`}</div>
            </Grid>
            //</div>
        );
}