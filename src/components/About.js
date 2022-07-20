import { makeStyles } from '@material-ui/core/styles';
import {  IconButton,  Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ResponsiveAppBar2 from './Carousel.js/Nav2';
import ResponsiveAppBar from './Nav';
import Typography from '@mui/material/Typography'
import { Container, CssBaseline } from '@material-ui/core';
import { Box } from '@mui/material';
import One from "../components/assets/four.jpg"

import { Link as Scroll } from 'react-scroll';
import {useState} from "react"

const r= localStorage.getItem('myData');
console.log(r);
const About =()=> {

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
   
    color: 'red',
    fontSize: '4rem',
  },
}));
const classes = useStyles();
const [checked, setChecked] = useState(false);
    return (
      <div style={{backgroundColor:"  #DDDDDD"}}>
        {r != null ? <ResponsiveAppBar /> : <ResponsiveAppBar2 />}

        <CssBaseline />
        <Container maxWidth="md" elevation={24}>
          <Box
            sx={{
                bgcolor:"rgb(76 19 19 /40%)",
                boxShadow: "1px 0px 15px 2px  #a38d8d",
              height: "400px",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "space-around",
            borderRadius:"20px",
            
            }}
          >
            <Typography
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <h1
                style={{
                    fontSize:"44px",
                    color:"white",
                  marginTop: "10px",
                  fontFamily: "'Roboto Slab', serif",
                }}
              >
                About us
              </h1>
            </Typography>
            <Typography
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3
                style={{
                  marginTop: "40px",
                  color:"white",
                  fontFamily: "'Lato', sans-serif",
                  padding: "0px 40px 0px 40px",
                }}
              >
                Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero magnam, voluptas non itaque iure pariatur. Blanditiis, ipsum dignissimos! Quas nobis id, reprehenderit commodi explicabo laborum nulla voluptatem dolorem. Deserunt?
              </h3>
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="sm">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              height: "100px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <img
                src={One}
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "400px",
                  alignItems:"center"
                }}
              />
              <h3
                style={{
                  marginTop: "0px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Name
              </h3>
            </div>
            <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <img
              src={One}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "400px",
                alignItems:"center"
              }}
            />
            <h3
              style={{
                marginTop: "0px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Name
            </h3>
          </div>
         
            <div
              style={{
                display: "flex",
                
                justifyContent: "space-around",
                flexDirection: "column",
                alignItems:"center"
              }}
            >
              <img
              src={One}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "400px",
                alignItems:"center"
              }}
              />
              <h3
                style={{
                  marginTop: "0px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Name
              </h3>
            </div>
          </div>
        </Container>
        <Container maxWidth="sm">
        <div
          style={{
            display: "flex",
           justifyContent: "space-around",
            flexDirection: "row",
            height: "100px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <img
              src={One}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "400px",
                alignItems:"center"
              }}
            />
            <h3
              style={{
                marginTop: "0px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Name
            </h3>
          </div>
          <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems:"center"
          }}
        >
          <img
            src={One}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "400px",
              alignItems:"center"
            }}
          />
          <h3
            style={{
              marginTop: "0px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Name
          </h3>
        </div>
       
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <img
            src={One}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "400px",
              alignItems:"center"
            }}
            />
            <h3
              style={{
                marginTop: "0px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Name
            </h3>
          </div>
        </div>
      </Container>

      </div>
    );
    }


export default About;
