import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
const UsersSlice = createSlice({
    name: 'UsersSlice',
    initialState: new Array<IUser>(), //[] doesnt know what datatype same datatype to be fiven in state and action
    reducers: {
        completed(_state: IUser[], action: PayloadAction<IUser []>){
            return action.payload;
        },
        started(state: IUser[]){
            return [];
        }
    },
});
//so that other components can use these reducers
export const {completed, started} = UsersSlice.actions;
export default UsersSlice.reducer;//it can be used in Appstate in combine reducers

