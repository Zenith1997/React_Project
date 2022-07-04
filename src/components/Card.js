import React, { useEffect, useState,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton,  Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    margin:80,
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  link:{
  
    margin:100

  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function Card() {
  let navigate = useNavigate();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
     
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
         
          <div className="home-Btns" style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}} >
            <Button onClick={()=>{navigate("/signup")}}
              className='btn-mobile' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Sign Up
            </Button>
            <Button 
             onClick={()=>{navigate("/login")}}
              className='btn-sin' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Sign In
            </Button>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

