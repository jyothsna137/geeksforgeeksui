import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import "./App.css";
import {completed, started, IHotel} from "./HotelsSlice"
import { AppBar, Button, Container, Grid, InputBase, Theme, Toolbar, Typography } from "@material-ui/core";
import HotelCard from "./HotelCard";
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles, StylesContext } from "@material-ui/styles";
import { useHistory } from "react-router";
import UserProvider, { UserContext } from "./UserProvider";

const useStyles = makeStyles<Theme, {}>({
rootContainer:{
display:"flex",
alignItems:"center",
margin:"10px 0",
},
 searchContainer:{
     height: '100%',
     display: 'flex',
     flexGrow: 0.9,
     backgroundColor: 'rgba(255,255,255,0.15)'
 },
 iconContainer: {
    display:'flex',
    alignItems:'center',
    padding: "0 15px"
 },
 textbox: {
     color:'white'
 },
 buttons:{
     display: "flex",
     flexGrow: 0.1,
     justifyContent: "space-evenly"
 },
 button: {
     color: 'white'
 },
 grid: {
     padding: "30px",
 }
});

interface IResponse{
    restaurant: IHotel
}
//component to insert data inside websitereducer and read it
export default function HotelsUI(){
    const [searchString, setSearchString] = useState("")
    const context = useContext(UserContext);
    const dispatch = useDispatch();
    const styles = useStyles();
    const hotels: IHotel[] = useSelector((x:AppState) => x.HotelsSlice);
    const history = useHistory();
    useEffect(() => {
        async function api() {
            const response = await fetch("/hotel.json");
            const json = await response.json();
            dispatch(completed(json.map((z: { restaurant: IHotel }) => z.restaurant)));
        }
        dispatch(started());
        api();
    },[]);

    return(
        <>
        <AppBar position="static">
            <Container maxWidth="xl" className={styles.rootContainer}>
                <div className={styles.searchContainer}>
                    <div className={styles.iconContainer}>
                    <SearchIcon background-color=""/>
                </div>  
                <InputBase 
                    fullWidth
                    className={styles.textbox}
                    placeholder="Search.."
                    inputProps={{"aria-label": "search"}} 
                    onChange = {e => setSearchString(e.target.value)}   
                    />
                    </div> 
                     <div className={styles.buttons}>
                         {context?.uid && (
                        <Button className={styles.button} onClick={() => history.push("/Profile")}>PROFILE</Button>)}
                        {!context?.uid && (
                        <Button className={styles.button} onClick={() => history.push("/SignUp")}>SIGN-UP</Button>)}
                        {!context?.uid && (
                        <Button className={styles.button} onClick={() => history.push("/Login")}>LOGIN</Button>)}
                    </div>
            </Container>
        </AppBar>
        <Grid container spacing={2} className={styles.grid}>
            {hotels.filter(x => x.name.toLowerCase().includes(searchString.toLowerCase())).map((hotel) => (
                <Grid item xs={4} justifyContent="space-evenly"
                    alignItems="center">
                    <HotelCard {...hotel}/>
                </Grid>
            ))}
        </Grid>
        </>
    );
}