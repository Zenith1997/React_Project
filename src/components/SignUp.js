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
import { ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignUp = ({ handleClose }) => {
  const navigate = useNavigate()
  const classes = useStyles();
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
    <div>
      {/* <ThemeProvider theme={SignUp}> */}
        <Grid container component="main" sx={{ height: '100vh',margin:"-100px" }}>
          <CssBaseline />
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
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main',   marginTop:"190px" }}>
        
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form className={classes.root} onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="First Name"
                    label="First Name"
                    variant="filled"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <TextField
                    label="Last Name"
                    variant="filled"
                    fullWidth
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <div>
                    <Button variant="contained" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                      Signup
                    </Button>
                    <p onClick={()=>{navigate("/signin")}} style={{color:"blue",    cursor: "pointer"}}>Already have an account?</p>
                  </div>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      {/* </ThemeProvider> */}
    </div>
  );
};


export default SignUp

