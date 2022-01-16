import { combineReducers, createStore } from "redux"
import { UsersReducer } from "./UsersReducer"
import {devToolsEnhancer} from "redux-devtools-extension"
import { WebsiteReducer } from "./WebsiteReducer";
import UsersSlice from "./UsersSlice";
import HotelsSlice from "./HotelsSlice";
//this is our database 
/**
 * rootReducer: {
 *      UsersReducer: {
 *          loading:  false
 *           users: [
 *              {
                multiple user data
                id:
                name:
                avatar:
                },
                {
                multiple user data
                id:
                name:
                avatar:
                }
*            ]
 *     }
 * }
 * 
 */
//mention all the reducers in the application
const rootReducer = combineReducers({
    //this is our tables
    UsersReducer: UsersReducer,
    //tablename: tablefunc
    WebsiteReducer: WebsiteReducer,

    UsersSlice:UsersSlice,
    HotelsSlice:HotelsSlice
})
//during select query //we want the returntype of the function
export type AppState = ReturnType<typeof rootReducer>;

//store needs to be given to the component
export const configureStore = createStore(rootReducer, {}, devToolsEnhancer({}));

