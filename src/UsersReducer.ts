interface IUser { //schema stored in interface
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar: string;
}

export interface IStatussizedUser{ //actual state which is stored in reducer
 users: IUser[];
 loading: boolean;
}
//1st issue with using reducer
interface IUsersAction{ //Action will tell us which coloumn in a particular row needs to be updated
    payload: IUser[];//Actual data or component passing to the user
    type: string;// which coloumn needs to be updated
}

//function                                      
export const UsersReducer = (state: IStatussizedUser, action: IUsersAction): IStatussizedUser => {
    //issue 2 is hardocde action type
    switch(action.type){        //3rd issie is cloned state
        case "started": return {...state,loading:true}; //state caanot be modified directly, it needs to be cloned
        case "completed": return {...state,users: action.payload, loading: false};
    }
    //4th issue return initial value
    return {loading: true, users:[]} //in case if action is incorrect
    //all issues can be fixed by redux toolkit
}