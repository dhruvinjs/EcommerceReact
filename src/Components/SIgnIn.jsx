import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';


export default function SignIn() {
    const navigate=useNavigate();
  const [formData,setformData]=useState({
    email:'',
    password:''
  })
  const handleSubmit =async (e) => {
    e.preventDefault();
 await   authLogin(formData.email, formData.password);
  };

const authLogin=async(email,password)=>{
        try {
          
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password });
            
    
            if (response.status === 200 || response.status === 201)  {
                console.log("login success");
                navigate("/Products");
            }
        } catch (error) {
            // console.error(error);
        }
    };
    


const handleChange = (e) => {
    console.log("handle change");
    setformData({...formData, [e.target.name]: e.target.value });
};
  return (
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>navigate('/')}
            >
       Dont have account,Sign up
            </Button>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
 
      </Container>
   
  );
}