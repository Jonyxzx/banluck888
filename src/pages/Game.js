import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { Container, Box, Button } from '@mui/material';
import background from '../assets/GameBackground.png';
import logo from '../assets/GameLogo.png';
import SingleGame from '../components/singleGame';
import MultiGame from '../components/multiGame';
import { initialiseGame, dealCards } from '../logic/logic';
import { ref, onValue } from "firebase/database";
import { db } from '../backend/firebase';
import { auth } from "../backend/firebase";
import { useNavigate } from 'react-router-dom';

const Game = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true);
    const [single, setSingle] = useState(false);
    const [game, setGame] = useState(null); // Add state for the game
    const [userBalance, setUserBalance] = useState(0);

    const startSinglePlayerGame = () => {
        if (userBalance <= 0) {
            navigate('/payment')
        } else {
            const newGame = initialiseGame(1);
            const gameWithCards = dealCards(newGame);
            setGame(gameWithCards);
            setMenu(false);
            setSingle(true);
        }

    };

    const authUser = auth.currentUser;

    useEffect(() => {
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
        };
    }, [authUser]);

    return (
        <>
            <Navbar />
            <Container
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            >
                {menu ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <img src={logo} height="350px" />
                        <Box mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ margin: '8px' }}
                                onClick={startSinglePlayerGame} // Use the new function
                            >
                                Play<br />(bet $100)
                            </Button>
                        </Box>
                    </Box>
                ) : single ? (
                    <SingleGame game={game} />
                ) : (
                    <MultiGame />
                )}
            </Container>
        </>
    );
};

export default Game;
