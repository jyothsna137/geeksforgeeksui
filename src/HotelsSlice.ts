import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotel{
    name: string;
    cuisines:string;
    featured_image:string;
    id:string;
}

//create slice
const HotelSlice = createSlice({
    name: "HotelSlice",
    initialState: new Array<IHotel>(),
    reducers: {
        completed(_state: IHotel[], action: PayloadAction<IHotel[]>){
            return action.payload;
        },
        started(state: IHotel[]){
            return [];
        }
    }
});

export const {completed, started} = HotelSlice.actions;
export default HotelSlice.reducer;//it can be used in Appstate in combine reducers