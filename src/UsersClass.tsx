import { Grid } from "@material-ui/core";
import React from "react";

interface IUser{
    id:string;
    email: string;
    first_name: string;
    last_name:string;
    avatar:string;
}

interface IState{
    users: IUser[];
    isLoading: boolean;
    searchString: string;
}

export default class UsersClass extends React.Component<{},IState>{
    constructor(props: {}){
        super(props);
        //if the below line is not given then undefined state will be assigned.
        this.state = {
            isLoading: true,
            users: [],
            searchString: "",
        }
    }
    //All AJAX calls are made from here
    public async componentDidMount(){
        const response = await fetch("https://reqres.in/api/users"); //API call using fetch keyword
        const json = await response.json();
        this.setState({users: json.data, isLoading: false});
    }
    public render(): JSX.Element {
        if(this.state.isLoading){
            return <div>loading</div>
        }
        /*return(
            <>
            <img src={this.state.users[0].avatar} />
            <div>{this.state.users[0].email}</div>
            </>
        );*/
        /*return(
            <>
            <div className="grid-container">
                {this.state.users.map(this.renderUser)}
            </div>
            </>
        );*/
        return(
            <>
            <input type="text" 
                onChange={e => {
                    const obj = {searchString: e.target.value};
                    this.setState(obj)
                }}
            />
                <Grid container spacing={2}>
                {this.state.users
                .filter(
                    (x) =>
                    x.first_name
                    .toLowerCase()
                    .includes(this.state.searchString.toLowerCase()) ||
                    x.last_name
                    .toLowerCase()
                    .includes(this.state.searchString.toLowerCase()) 
                )
                .map(this.renderUser)}
                </Grid>
            </>
        );
    }
    private renderUser(user: IUser): JSX.Element{
        return(
            //<div className="grid-tem" key={user.id}>
            <Grid item key={user.id} xs={4}>
                <img alt="geeksforgeeks" src={user.avatar} />
                <div>{user.email}</div>
                <div>{`${user.first_name}${user.last_name}`}</div>
            </Grid>
            //</div>
        )
    }
}
