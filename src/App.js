import './App.css';
import React, {useState} from 'react';
import Table from './component/DatabaseTable.js'
import Sidebar from './component/Sidebar.js'
import Login from './component/Login.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette:{
    mode: "dark"
  }
})

function App() {

  const [switching, setSwitching] = useState('admin');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        {isLoggedIn ? (
          <Sidebar type={switching}>
            {/* <UserInterface /> */}
            {switching === 'admin' ? <Table /> : "User Interface will replace here" }
          </Sidebar>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
