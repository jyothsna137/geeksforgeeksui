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
import SearchIcon from "@material-ui/icons/Search";

import "./App.css";

interface IMaterialUIProps{
    labelColor:string;
    font:string;
    backgroundColor:string;
}
const useStyles = makeStyles<Theme, IMaterialUIProps>({
    root: {
      //color: 'blue',
      color: (props) => props.labelColor,
      fontSize: (props) => props.font,
      backgroundColor: (props) => props.backgroundColor,
    },
  });

export default function MaterialUI(){
    const style = useStyles({labelColor:'red',font:'20px',backgroundColor:'blue'});
    return (
       <>
        <CircularProgress 
            size={100} 
        />
        <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            error={true}
            helperText="Incorrect entry"
        />
        {/**Labels */}
        <Typography className={style.root} 
            variant="h4" 
            gutterBottom
            component="div"
        >h4 Heading 
        </Typography>    
        {/**Buttons */}   
        <Button variant="contained" color="primary">Contained</Button>
        <Fab variant="extended">Navigate</Fab>
        {/**Cards  Image, portal name, cuisines*/}  
        <Card className={style.root}>
            <CardMedia 
            component="img"
            height="190" 
            image="https://b.zmtcdn.com/data/pictures/2/308322/cf86dbd8b8ca4d40682c7713f112cc07_featured_v2.jpg">         
            </CardMedia>
            <CardContent>
                <Typography className={style.root} variant="body2">
                    Haldirams
                </Typography>
                <Typography className={style.root} variant="body2">
                    North Indian
                </Typography>
            </CardContent>
        </Card>
        <AppBar
            position="static">
              <SearchIcon/>
              <input type="search"
              placeholder="Search…"
              />
        </AppBar>
      </>
    );
}