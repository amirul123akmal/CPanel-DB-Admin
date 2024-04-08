import React, { useState } from 'react'
import { Container, Paper, TextField, Button, Typography, Tooltip } from '@mui/material';
import axios from 'axios';
import Link from '@mui/material/Link';

export function Login({ adminLogin, userLogin, failed }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const accessAPI = async () => {
    const url = global.config.endpoint + '/loginData';
    const data = {
      "user" : username,
      "pass" : password
    };
    try {
      const response = await axios.post(url, data);
      if(response['data']['transmission'] === 'success')
      {
        if(response['data']['status'] === 'admin') 
        {
          adminLogin();
        }
        else{
          userLogin();
        } 
      }
      else failed()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: 32, textAlign: 'center' }}>
        <Typography variant="h3" align="center">
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          style={{ marginTop: 16 }}
          onClick={accessAPI}
        >
          Login
        </Button>
        <Typography
          style={{
            textAlign: 'right',
            paddingTop: 22,
          }}
        >
          <Tooltip title={<Link href="https://amirul-hub.com/#contact" target='_blank' color='inherit'>Contact Me</Link>}>
              <span>
              Registration
              </span>
          </Tooltip>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;