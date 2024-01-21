import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Container, Box, Typography, Button } from '@mui/material';
import background from '../assets/GameBackground.png';
import logo from '../assets/GameLogo.png';
import SingleGame from '../components/singleGame';
import MultiGame from '../components/multiGame';
import { initialiseGame, dealCards } from '../logic/logic';

const Game = () => {
    const [menu, setMenu] = useState(true);
    const [single, setSingle] = useState(false);
    const [game, setGame] = useState(null); // Add state for the game

    const startSinglePlayerGame = () => {
        const newGame = initialiseGame(1);
        const gameWithCards = dealCards(newGame);
        setGame(gameWithCards);
        setMenu(false);
        setSingle(true);
    };

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
                                Play<br/>(bet $100)
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
