import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AppState } from "./AppState";
import { IStatussizedUser } from "./UsersReducer";
import { IUser } from "./UsersSlice";

export default function ReduxBasics(){

    const dispatch = useDispatch(); //insert query
    //const users: IStatussizedUser
    const statusizedUser: IStatussizedUser = useSelector((state:AppState) => state.UsersReducer);
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            //insert query
            dispatch({type:"completed",payload:json.data})
        }
        //insert query
        dispatch({type: "started"});
        api();
    },[dispatch])
    if(statusizedUser.loading === true){
        return <div>it is loading</div>
    }
    else {
            return(
                <Grid>
                    {statusizedUser.users.map(renderUser)} {/*Display all the users data */}
                </Grid>
            )
        }
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