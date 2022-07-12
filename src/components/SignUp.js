import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: theme.spacing(2),

//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '300px',
//     },
//     '& .MuiButtonBase-root': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const SignUp = ({ handleClose }) => {
  const navigate = useNavigate()
  // const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };

  return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh',margin:"-80px" }}>
          {/* <CssBaseline /> */}
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',

            }}
          >
            <b sx={{color: 'black'}}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</b>
          </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                paddingLeft: 10,
                my: 3.5,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main',   marginTop:"220px" }}>
        
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                {/* <form className={classes.root} onSubmit={handleSubmit}> */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="First Name"
                    label="First Name"
                    variant="filled"
                    name="First Name"
                    autoComplete="First Name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Last Name"
                    label="Last Name"
                    variant="filled"
                    name="Last Name"
                    autoComplete="Last Name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Email"
                    label="Email"
                    variant="filled"
                    name="Email"
                    autoComplete="Email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    variant="filled"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <div>
                    <Button onClick={()=>{navigate("/signin")}}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ mt: 5, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid item xs>
                      <Link href="/signin" variant="body2">
                        Already have an account?
                      </Link>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                    {/* <p onClick={()=>{navigate("/signin")}} style={{color:"blue",    cursor: "pointer"}}>Already have an account?</p> */}
                  </div>
                {/* </form> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
};


export default SignUp