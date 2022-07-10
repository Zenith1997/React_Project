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
    "&:hover, &.Mui-focusVisible": { backgroundColor:"rgb(76 19 19 / 40%)" },
    color: 'red',
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
        <div style={{marginTop:"-50px",backgroundColor: "rgb(120 24 21 / 50%)",height:"100px",width:"1518px",borderRadius:"10px,0px,0px,10px"}}  className={classes.container}>
         
        
            <Scroll   to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon   style={{ color: "rgb(211 211 211 / 100%)",borderRadius:"50px"}} className={classes.goDown} />
              </IconButton>
            </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

