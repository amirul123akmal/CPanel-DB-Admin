import './App.css';
import React, {useState} from 'react';
import Sidebar from './component/Sidebar.js'
import Login from './component/Login.js';
import Admin from './component/Admin.js';
import User from './component/User.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette:{
    mode: "dark"
  }
})

function App() {

  const [switching, setSwitching] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState(1);

  const handlePage = (pageReceive) => {
    setPage(pageReceive);
  }

  const handleAdmin = () => {
    setIsLoggedIn(true);
    setSwitching('admin');
    setPage(1);
  };
  
  const handleUser = () => {
    setIsLoggedIn(true);
    setSwitching('user');
  };
 
  const handleFail = () => {
    setIsLoggedIn(false);
    setSwitching('failed');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSwitching('');
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        {isLoggedIn ? (
          <Sidebar goBack={handleLogout} togglePage={handlePage} type={switching} >
            {switching === 'admin' ? <Admin getPage={page} /> : <User/> }
          </Sidebar>
        ) : (
          <Login adminLogin={handleAdmin} userLogin={handleUser} failed={handleFail}/>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
