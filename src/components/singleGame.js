import { Container, Box, Typography, Button } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React, { useState, useEffect } from 'react';
import dealerCard from '../assets/cards/back_card.jpeg';
import { shuffleDeck, dealCards, calculateHandValue, determineWinner, initialiseGame, hitCard, hitCardDealer } from '../logic/logic';
import { writePlayerData, writeDeckData, writeBalanceData } from '../backend/command'
import { useNavigate, useLocation } from 'react-router-dom';

const cards = [{
    "0": {
        "name": "Ace of Diamonds",
        "value": [1, 10, 11],
        "image": "ace_of_diamonds.png"
    },
    "1": {
        "name": "Ace of Clubs",
        "value": [1, 10, 11],
        "image": "ace_of_clubs.png"
    },
    "2": {
        "name": "Ace of Hearts",
        "value": [1, 10, 11],
        "image": "ace_of_hearts.png"
    },
    "3": {
        "name": "Ace of Spades",
        "value": [1, 10, 11],
        "image": "ace_of_spades.png"
    },
    "4": {
        "name": "2 of Diamonds",
        "value": 2,
        "image": "2_of_diamonds.png"
    },
    "5": {
        "name": "2 of Clubs",
        "value": 2,
        "image": "2_of_clubs.png"
    },
    "6": {
        "name": "2 of Hearts",
        "value": 2,
        "image": "2_of_hearts.png"
    },
    "7": {
        "name": "2 of Spades",
        "value": 2,
        "image": "2_of_spades.png"
    },
    "8": {
        "name": "3 of Diamonds",
        "value": 3,
        "image": "3_of_diamonds.png"
    },
    "9": {
        "name": "3 of Clubs",
        "value": 3,
        "image": "3_of_clubs.png"
    },
    "10": {
        "name": "3 of Hearts",
        "value": 3,
        "image": "3_of_hearts.png"
    },
    "11": {
        "name": "3 of Spades",
        "value": 3,
        "image": "3_of_spades.png"
    },
    "12": {
        "name": "4 of Diamonds",
        "value": 4,
        "image": "4_of_diamonds.png"
    },
    "13": {
        "name": "4 of Clubs",
        "value": 4,
        "image": "4_of_clubs.png"
    },
    "14": {
        "name": "4 of Hearts",
        "value": 4,
        "image": "4_of_hearts.png"
    },
    "15": {
        "name": "4 of Spades",
        "value": 4,
        "image": "4_of_spades.png"
    },
    "16": {
        "name": "5 of Diamonds",
        "value": 5,
        "image": "5_of_diamonds.png"
    },
    "17": {
        "name": "5 of Clubs",
        "value": 5,
        "image": "5_of_clubs.png"
    },
    "18": {
        "name": "5 of Hearts",
        "value": 5,
        "image": "5_of_hearts.png"
    },
    "19": {
        "name": "5 of Spades",
        "value": 5,
        "image": "5_of_spades.png"
    },
    "20": {
        "name": "6 of Diamonds",
        "value": 6,
        "image": "6_of_diamonds.png"
    },
    "21": {
        "name": "6 of Clubs",
        "value": 6,
        "image": "6_of_clubs.png"
    },
    "22": {
        "name": "6 of Hearts",
        "value": 6,
        "image": "6_of_hearts.png"
    },
    "23": {
        "name": "6 of Spades",
        "value": 6,
        "image": "6_of_spades.png"
    },
    "24": {
        "name": "7 of Diamonds",
        "value": 7,
        "image": "7_of_diamonds.png"
    },
    "25": {
        "name": "7 of Clubs",
        "value": 7,
        "image": "7_of_clubs.png"
    },
    "26": {
        "name": "7 of Hearts",
        "value": 7,
        "image": "7_of_hearts.png"
    },
    "27": {
        "name": "7 of Spades",
        "value": 7,
        "image": "7_of_spades.png"
    },
    "28": {
        "name": "8 of Diamonds",
        "value": 8,
        "image": "8_of_diamonds.png"
    },
    "29": {
        "name": "8 of Clubs",
        "value": 8,
        "image": "8_of_clubs.png"
    },
    "30": {
        "name": "8 of Hearts",
        "value": 8,
        "image": "8_of_hearts.png"
    },
    "31": {
        "name": "8 of Spades",
        "value": 8,
        "image": "8_of_spades.png"
    },
    "32": {
        "name": "9 of Diamonds",
        "value": 9,
        "image": "9_of_diamonds.png"
    },
    "33": {
        "name": "9 of Clubs",
        "value": 9,
        "image": "9_of_clubs.png"
    },
    "34": {
        "name": "9 of Hearts",
        "value": 9,
        "image": "9_of_hearts.png"
    },
    "35": {
        "name": "9 of Spades",
        "value": 9,
        "image": "9_of_spades.png"
    },
    "36": {
        "name": "10 of Diamonds",
        "value": 10,
        "image": "10_of_diamonds.png"
    },
    "37": {
        "name": "10 of Clubs",
        "value": 10,
        "image": "10_of_clubs.png"
    },
    "38": {
        "name": "10 of Hearts",
        "value": 10,
        "image": "10_of_hearts.png"
    },
    "39": {
        "name": "10 of Spades",
        "value": 10,
        "image": "10_of_spades.png"
    },
    "40": {
        "name": "Jack of Diamonds",
        "value": 10,
        "image": "jack_of_diamonds.png"
    },
    "41": {
        "name": "Jack of Clubs",
        "value": 10,
        "image": "jack_of_clubs.png"
    },
    "42": {
        "name": "Jack of Hearts",
        "value": 10,
        "image": "jack_of_hearts.png"
    },
    "43": {
        "name": "Jack of Spades",
        "value": 10,
        "image": "jack_of_spades.png"
    },
    "44": {
        "name": "Queen of Diamonds",
        "value": 10,
        "image": "queen_of_diamonds.png"
    },
    "45": {
        "name": "Queen of Clubs",
        "value": 10,
        "image": "queen_of_clubs.png"
    },
    "46": {
        "name": "Queen of Hearts",
        "value": 10,
        "image": "queen_of_hearts.png"
    },
    "47": {
        "name": "Queen of Spades",
        "value": 10,
        "image": "queen_of_spades.png"
    },
    "48": {
        "name": "King of Diamonds",
        "value": 10,
        "image": "king_of_diamonds.png"
    },
    "49": {
        "name": "King of Clubs",
        "value": 10,
        "image": "king_of_clubs.png"
    },
    "50": {
        "name": "King of Hearts",
        "value": 10,
        "image": "king_of_hearts.png"
    },
    "51": {
        "name": "King of Spades",
        "value": 10,
        "image": "king_of_spades.png"
    }
}
]

export default function SingleGame({ game }) {
    const [playerHands, setPlayerHands] = useState([]);
    const [dealerHands, setDealerHands] = useState([]);
    const [playerValue, setPlayerValue] = useState(0);
    const [dealerValue, setDealerValue] = useState('');
    const [isEnd, setIsEnd] = useState(true);
    const [hasStood, setHasStood] = useState(false);
    const [gameResult, setGameResult] = useState('');
    const [hasWon, setHasWon] = useState(false);
    const [amt, setAmt] = useState(0);
    const [amtGain, setAmtGain] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const restart = () => {
        const newGame = initialiseGame(1);
        const gameWithCards = dealCards(newGame);
        setHasWon(false);
        setIsEnd(true);
        if (location.pathname === '/game') {
            navigate('/menu');
        } else {
            navigate('/game');
        }
    };

    const handleHit = () => {
        setPlayerHands(hitCard(game.shuffledDeck, game.players[0]));
        setPlayerValue(calculateHandValue(game.players[0].hand));
    };

    useEffect(() => {
        if (hasWon) {
            writeBalanceData(amt);
            setHasWon(false);
        }
    }, [hasWon, amt]);

    useEffect(() => {
        if (isEnd) {
            setIsEnd(false);
            setPlayerHands(game.players[0].hand);
            writeDeckData(game.players[0].hand);
            setPlayerValue(calculateHandValue(game.players[0].hand));
            setDealerHands(game.dealer.hand);
        }
    }, [isEnd, game]);

    useEffect(() => {
        if ((playerHands.length === 5 || playerValue >= 21)) {
            setIsEnd(true);
            setDealerHands(hitCardDealer(game.shuffledDeck, game.dealer));
            setDealerValue(calculateHandValue(game.dealer.hand));
            win();
        }
    }, [playerValue, playerHands, dealerValue, game]);

    useEffect(() => {
        if (hasStood) {
            setIsEnd(true);
        }
    }, [hasStood]);

    const handleStand = () => {
        setIsEnd(true);
        setHasStood(true);
        setDealerHands(hitCardDealer(game.shuffledDeck, game.dealer));
        setDealerValue(calculateHandValue(game.dealer.hand));
        win();
    };

    const win = () => {
        const playerMul = determineWinner(game.players[0].hand, game.dealer.hand);
        setAmt(playerMul * 100);

        let resultText = '';
        let gainText = '';

        if (playerMul === 0) {
            resultText = "You Draw >_<";
        } else if (playerMul < 0) {
            resultText = "You Lose T.T";
            gainText = "You lost " + amt;
        } else {
            resultText = "You WIN!";
            gainText = "You won " + amt;
        }

        setGameResult(resultText);
        setAmtGain(gainText);

        setHasWon(true);
        setIsEnd(true);
    };

    return (
        <>
            <Container sx={{ position: 'relative', height: '100vh' }}>
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {/* Coin icon and bet amount */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <MonetizationOnIcon sx={{ color: 'yellow' }} />
                        <Typography sx={{ color: 'yellow' }}>100</Typography>
                    </Box>

                    {/* Dealer portion */}
                    <Box sx={{ paddingTop: "20px" }}>
                        {isEnd ? dealerHands.map((card, index) => (
                            <img
                                key={`${card}-${index}`}
                                src={require("../assets/cards/" + cards[0][card].image)}
                                height="150px"
                                alt={`dealer-card-${index}`}
                            />
                        )) : (
                            dealerHands.map((_, index) => (
                                <img
                                    key={`hidden-card-${index}`}
                                    src={dealerCard}
                                    height="150px"
                                    alt={`hidden-card-${index}`}
                                />
                            ))
                        )}
                        <Typography>Dealer: {dealerValue == 60 ? "Ban Luck" : dealerValue == 70 ? "Wu Long" : dealerValue == 80 ? "Ban Ban" : dealerValue}</Typography>
                    </Box>

                    {/* Player portion */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            marginBottom: '100px',
                        }}
                    >
                        <Typography sx={{ paddingBottom: '5px' }}>Current Value: {playerValue == 60 ? "Ban Luck" : playerValue == 70 ? "Wu Long" : playerValue == 80 ? "Ban Ban" : playerValue}</Typography>
                        {playerHands.map((card, index) => (
                            <img
                                key={`${card}-${index}`}
                                src={require("../assets/cards/" + cards[0][card].image)}
                                height="160"
                                alt={`player-card-${index}`}
                            />
                        ))}

                        {/* Buttons for Hit and Stand */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '20px',
                            }}
                        >
                            {playerHands.length !== 5 && playerValue < 21 && !hasStood && (
                                <Button variant="contained" color="primary" onClick={handleHit}>
                                    Hit
                                </Button>
                            )}
                            {playerHands.length !== 5 && playerValue < 21 && !hasStood && playerValue > 15 && (
                                <Button variant="contained" color="secondary" onClick={handleStand}>
                                    Stand
                                </Button>
                            )}
                        </Box>
                    </Box>

                    {/* Display game result at the center */}
                    {gameResult && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '40%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: '#ffffff',
                                padding: '20px',
                                borderRadius: '10px',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography variant="h4" color="orange">{gameResult}</Typography>
                            {gameResult === "You WIN!" ? (
                                <Typography variant="h6" color="green">{amtGain}</Typography>
                            ) : (
                                <Typography variant="h6" color="red">{amtGain}</Typography>
                            )}

                            <Button variant="contained" color="primary" onClick={() => { restart() }}>
                                Play Again?
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    );
}
