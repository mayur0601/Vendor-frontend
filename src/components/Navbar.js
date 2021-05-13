import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Logout} from '../actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'#ffff',
    textDecoration: 'none'
  },
  color:{
      color:'#ffff',
      textDecoration: 'none'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleLogout = (e) =>{
    dispatch(Logout());
  }
 

 
    
  return (
    <div className={classes.root}>
        {(auth.isLoggedin)?(

            <>
             <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link className={classes.color,classes.title} to="/">
          <Typography variant="h6" className={classes.title}>
            ConnectToFarmer
          </Typography>
          </Link>
        <Link className={classes.color} to="/login">
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            </IconButton>
        </MenuItem>
      </Link>

        <Link className={classes.color} to="/profile">
        <Button color="inherit" >{auth.user?.username}</Button>
        </Link>
         
        <Link className={classes.color} to="/logout">
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Link>
          
        </Toolbar>
      </AppBar>
            </>

        ):(

            <>
            <AppBar position="static">
       <Toolbar>
         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" className={classes.title}>
           ConnectToFarmer
         </Typography>
       <Link className={classes.color} to="/login">
       <Button color="inherit" >Login</Button>
       </Link>
        
       <Link className={classes.color} to="/signup">
       <Button color="inherit" >Sign UP</Button>
       </Link>
         
       </Toolbar>
     </AppBar>
           </>

        )}
      
    </div>
  );
}