import { Redirect, Route } from 'react-router';
import './App.css';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import componentDidMount from './ComponentDidMount';
import componentDidUpdate from './ComponentDidUpdate';
import Hooks from "./Hooks";
import HooksUI from './HooksUI';
import HotelsUI from './HotelsUI';
import Login from './Login';
import MainClass from "./MainClass";
import MaterialUI from './MaterialUI';
import Profile from './Profile';
import ReduxBasics from './ReduxBasics';
import SignUp from './SignUp';
import SliceUI from './SliceUI';
import UsersClass from "./UsersClass";

function App() {
  return (/*all routes shold be inside switch*/
    <>
    <switch>
      {/*Routing examples*/} 
      <Route exact path="/a" component={ComponentA} />
      <Route exact path="/b/:name" component={ComponentB} />
      <Route exact path="/c" component={ComponentC} />
      {/*class examples*/} 
      <Route exact path="/MainClass" component={MainClass} />
      <Route exact path="/UsersClass" component={UsersClass} /> 
      {/*function examples*/} 
      <Route exact path="/Hooks" component={Hooks} />
      <Route exact path="/ComponentDidMount" component={componentDidMount} />
      <Route exact path="/ComponentDidUpdate" component={componentDidUpdate} />
      {/*redux examples*/}
      <Route exact path="/ReduxBasics" component={ReduxBasics}></Route>
      <Route exact path="/SliceUI" component={SliceUI}></Route>
      <Route exact path="/WebReducerUI" component={SliceUI}></Route> 
      {/*react hooks form example*/}
      <Route exact path="/HooksUI" component={HooksUI}></Route>
      {/*project*/}
      <Route exact path="/HotelsUI" component={HotelsUI}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/SignUp" component={SignUp}></Route>
      <Route exact path="/Profile" component={Profile}></Route>
      {/*material ui*/}
      <Route exact path="/MaterialUI" component={MaterialUI}></Route>
      <Route exact path="/" render={() => <Redirect to="/HotelsUI"/>}></Route>
      </switch>
      </>
  );
}

export default App;
