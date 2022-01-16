import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { CircularProgress, 
    TextField, 
    Typography, 
    makeStyles, 
    Theme, 
    Button, 
    Fab, 
    Card, 
    CardMedia, 
    CardContent, 
    AppBar} from "@material-ui/core";
import FormButtons from "./FormButtons";
import Authentication, { IAuthentication } from "./Authentication";
import firebase from "firebase"

export default function Login(){
    const history = useHistory();
    const onSubmit = async (details:IAuthentication) => {
        try{
      // console.log("submit button invoked");
       await firebase.auth().signInWithEmailAndPassword(details.email, details.password);
       //history.push("/");
    }
    catch(e){
        throw e;
        //display error
    }
};
    return (
        <Authentication
            isUserNameVisible = {false}
            title={"Welcome to the login page"}
            height={300}
            onSubmit={onSubmit}
            tertiary = {{
                label: "Login",
                onClick: () => history.push("/SignUp"),
            }}
        />
    );
}

