import {
    makeStyles, TextField, Theme, Typography
} from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import FormButtons, { IButtonItem } from "./FormButtons";
import LoadingSpinner from "./LoadingSpinner";

const useStyles = makeStyles<Theme,IProps>({
    outerDiv:{
        alignItems:"center",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        height: (props) => props.height,
    },
    innerDiv:{
        width:"80%",
        display:"flex",
        height:"200px",
        flexDirection:"column",
        justifyContent:"space-evenly"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height:"200px",
        justifyContent:"space-evenly"
    },
    Title:{
        textAlign:"center",
        margin:"0-30px"
    },
    buttons:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width:"100%"
    },
    buttonItem:{
        margin:"0 10px"
    },
    errorMessage:{
        color: "red",
    }
  });
  export interface IAuthentication{
    username: string,
    email: string,
    password: string,
  }
  interface IProps{
    isUserNameVisible: boolean;
    title: string,
    height: number;
    tertiary: IButtonItem;
    onSubmit: (data: IAuthentication) => void;
  }
export default function Authentication(props:IProps){
    const styles = useStyles(props);
    const {register, reset, handleSubmit, formState: {errors}} = useForm<IAuthentication>();
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const onSubmit = async (data:IAuthentication) => {
        try{
        setLoading(true);
        await props.onSubmit(data);
        reset();
        history.push("/");
        setLoading(false);
    }
    catch(e: any){
       setLoading(false);
       setErrorMessage(e.message); 
    }
}
    return (
        <div className={styles.outerDiv}>
            <div className={styles.innerDiv}>
        <Typography variant="h3" className={styles.Title}>
            {props.title}
         </Typography> 
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            {props.isUserNameVisible && (
            <TextField 
            {...register("username",{
                    required: true,
                minLength:{value:4, message: "name should have min length 4"},
            })}    
                variant="outlined"
                label="User Name"
                placeholder="User Name"
                required={true}
                error={errors && errors.email?.message ? true: false}
                helperText={errors.email?.message}
            />
            )}
            <TextField 
            {...register("email",{
                required: true,
                minLength: { value: 4, message: "4 is min length" },
                pattern: {
                  value: /\w+@\w+\.\w+/,
                  message: "email regex not matched",
                },
            })}    
                variant="outlined"
                label="Email"
                placeholder="Email"
                required={true}
                error={errors && errors.email?.message ? true: false}
                helperText={errors.email?.message}
            />
            <TextField 
            type="password" 
            {
               ...register("password",{
               minLength:{value:4, message: "password should have min length 4"},
            })}
            variant="outlined"
            label="Password"
            placeholder="Password"
            required={true}
            error={errors && errors.password?.message ? true: false}
            helperText={errors.password?.message}
            />
            <FormButtons
                primary={{
                    label: "Submit",
                    onClick: () => console.log("submit"),
                }}
                secondary={{
                    label: "Reset",
                    onClick: () => reset(),
                }}
                tertiary={{
                    label: "Sign Up",
                    onClick: () => history.push("/SignUp"),
                }}
                />
            </form>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {isLoading && <LoadingSpinner/>}
        </div>
    </div>
);
}
