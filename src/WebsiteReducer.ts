//Display website names
//Step 1: data is string[] so no need to create interface
//Step 2 : Action
interface IWebsiteAction{
    type: string;
    payload: string[];
}
//new reducer
//Step 3: create function to tell all the reducers. Array is empty means loading
export const WebsiteReducer = (state: string[], action: IWebsiteAction): string[] => {
    switch(action.type){
        case "WebsiteStarted": return [];
        case "WebsiteCompleted": return [...action.payload];
    }
    return [];
}
//Register WebsiteReducer with RootReducer