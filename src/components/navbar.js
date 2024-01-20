import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import CoinsIcon from '@mui/icons-material/LocalAtm';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { auth } from "../backend/firebase";
import { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import logo from "../assets/logo.png"
import { db } from '../backend/firebase';

function Navbar() {
    const authUser = auth.currentUser;
    const name = authUser?.email.split("@")[0]
  const navigate = useNavigate();

  const [userBalance, setUserBalance] = useState(0);
  
  useEffect(() => {
    // Initial check when the component mounts
    checkAuthState();

    // Periodic check every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(checkAuthState, 5000);

    const reference = ref(db, `players/${authUser?.uid}/`);

    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData && userData.balance !== undefined) {
            setUserBalance(userData.balance);
        }
      }
    };

    // Set up a real-time listener for changes
    const unsubscribe = onValue(reference, onDataChange);

    // Return a cleanup function to remove the listener when the component unmounts
    return () => {
      unsubscribe(); // Remove the real-time listener
      clearInterval(intervalId);
    };
  }, [authUser]);

  const checkAuthState = () => {
    
    if (!authUser) {
      // No authenticated user, redirect to login page
      navigate('/');
    }
  };

  return (
    <Container style={{ background: "#FF2F00"}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0' }}>
        {/* Left section with poker card icon and brand name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={() => {navigate('/menu')}}>
            <img src={logo} height="50px"/>
          </IconButton>
          
        </Box>

        {/* Right section with user information, coins, and sign out */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccountCircleIcon />
            <Typography>Hi, {name}!</Typography>

          {/* Coins icon and count */}
          <Box sx = {{ marginLeft: '2rem', marginRight:'2rem'}}>
            <IconButton color="inherit" onClick={() => navigate('/payment')}>
                <CoinsIcon />
                <Typography variant="body1">{userBalance}</Typography>
            </IconButton>
          </Box>
            

          {/* Sign Out */}
          <IconButton color="inherit">
            <Logout />
            <Typography onClick={()=>navigate('/')}>
              Sign Out?
              </Typography>
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
