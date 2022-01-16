import { useHistory } from "react-router";
import Authentication, { IAuthentication } from "./Authentication";
import firebase from "firebase";

export default function SignUp(){
    const history = useHistory();
    const onSubmit = async (userDetails:IAuthentication) => {
        try {
           // console.log("submit button invoked in sign up page");
            const userData = await firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password);
            await userData.user?.updateProfile({displayName: userDetails.username});
            //history.push("/");
        }
        catch(e){
            throw e;
        }
    };
return (
    <Authentication 
        isUserNameVisible
        title={"Welcome to the Sign up Page"} 
        height={300} 
        onSubmit={onSubmit}
        tertiary={{
            label: "Sign Up",
            onClick: () => history.push("/Login"),
        }}
    />
);
}