import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



export default function SignUp() {
  const [formData,setformData]=useState({
    name:'',
    email:'',
    password:'',
    avatar:'https://gravatar.com/avatar/647ea5e0998d3b76acf6d7d1b106e0c0?s=400&d=robohash&r=x',

  })
  const handleInput = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const [message,setMessage]=useState()
  const handleSignup = async (data) => {
    try {
   
    
      let response = await axios.post("https://api.escuelajs.co/api/v1/users/", formData, 
       );

      if (response.status === 200 || response.status === 201) {
        setMessage("User created successfully");
        navigator('/SignIN');
      } else {
        setMessage("Failed to create user.");
      }
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
      setMessage("Error creating user.");
    }
  };

  
    const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(formData);

    };
  

  
const navigator=useNavigate();
  return (
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Typography component="h5" variant="h5">
            {message}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  position="relative"
                  id="name"
                  label="First Name"
                  onChange={handleInput}
                  autoFocus
                />
              
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Button
             sx={{background:'green',color:'white',  ":hover": { background: 'brown' }}}
             onClick={()=>navigator('/SignIN')}
            >
              Already have an account? Sign in
            </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>

     
  );
}