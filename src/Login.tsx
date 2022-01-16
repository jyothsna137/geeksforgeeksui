import firebase from "firebase";
import { useHistory } from "react-router";
import Authentication, { IAuthentication } from "./Authentication";

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

