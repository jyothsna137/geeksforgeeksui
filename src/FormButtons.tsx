import {
    Fab, makeStyles
} from "@material-ui/core";
import { useHistory } from "react-router";
interface ILogin{
    email: string,
    password: string;
}

const useStyles = makeStyles({
    outerDiv:{
        alignItems:"center",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        height:"100%"
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
  });

export interface IButtonItem{
    label: string;
    onClick: () => void;
}

interface IProps{
    primary: IButtonItem;
    secondary?: IButtonItem;
    tertiary?: IButtonItem;
}

export default function FormButtons(props: IProps){
    const styles = useStyles();
    const history = useHistory();
    
    return (
        <div className={styles.buttons}>
            <Fab type="submit" variant="extended" color="primary" className={styles.buttonItem} onClick={props.primary.onClick}>{props.primary.label}</Fab>
            {props.secondary && <Fab type="reset" variant="extended" color="secondary" className={styles.buttonItem} onClick={props.secondary.onClick}>{props.secondary.label}</Fab>}
            {props.tertiary && <Fab onClick={props.tertiary.onClick} variant="extended" className={styles.buttonItem}>{props.tertiary.label}</Fab>}
            <Fab onClick={() => history.push("/HotelsUI")} variant="extended" color="inherit" className={styles.buttonItem}>Home</Fab>
        </div>
    );
}