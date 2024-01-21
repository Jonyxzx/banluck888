const cardDeck = {
    "cards": {
        "0" : {
            "name": "Ace of Diamonds",
            "value": [1, 10, 11],
            "image": ""
        },
        "1" : {
            "name": "Ace of Clubs",
            "value": [1, 10, 11],
            "image": ""
        },
        "2": {
            "name": "Ace of Hearts",
            "value": [1, 10, 11],
            "image": ""
        },
        "3": {
            "name": "Ace of Spades",
            "value": [1, 10, 11],
            "image": ""
        },
        "4": {
            "name": "2 of Diamonds",
            "value": 2,
            "image": ""
        },
        "5": {
            "name": "2 of Clubs",
            "value": 2,
            "image": ""
        },
        "6": {
            "name": "2 of Hearts",
            "value": 2,
            "image": ""
        },
        "7": {
            "name": "2 of Spades",
            "value": 2,
            "image": ""
        },
        "8": {
            "name": "3 of Diamonds",
            "value": 3,
            "image": ""
        },
        "9": {
            "name": "3 of Clubs",
            "value": 3,
            "image": ""
        },
        "10": {
            "name": "3 of Hearts",
            "value": 3,
            "image": ""
        },
        "11": {
            "name": "3 of Spades",
            "value": 3,
            "image": ""
        },
        "12": {
            "name": "4 of Diamonds",
            "value": 4,
            "image": ""
        },
        "13": {
            "name": "4 of Clubs",
            "value": 4,
            "image": ""
        },
        "14": {
            "name": "4 of Hearts",
            "value": 4,
            "image": ""
        },
        "15": {
            "name": "4 of Spades",
            "value": 4,
            "image": ""
        },
        "16": {
            "name": "5 of Diamonds",
            "value": 5,
            "image": ""
        },
        "17": {
            "name": "5 of Clubs",
            "value": 5,
            "image": ""
        },
        "18": {
            "name": "5 of Hearts",
            "value": 5,
            "image": ""
        },
        "19": {
            "name": "5 of Spades",
            "value": 5,
            "image": ""
        },
        "20": {
            "name": "6 of Diamonds",
            "value": 6,
            "image": ""
        },
        "21": {
            "name": "6 of Clubs",
            "value": 6,
            "image": ""
        },
        "22": {
            "name": "6 of Hearts",
            "value": 6,
            "image": ""
        },
        "23": {
            "name": "6 of Spades",
            "value": 6,
            "image": ""
        },
        "24": {
            "name": "7 of Diamonds",
            "value": 7,
            "image": ""
        },
        "25": {
            "name": "7 of Clubs",
            "value": 7,
            "image": ""
        },
        "26": {
            "name": "7 of Hearts",
            "value": 7,
            "image": ""
        },
        "27": {
            "name": "7 of Spades",
            "value": 7,
            "image": ""
        },
        "28": {
            "name": "8 of Diamonds",
            "value": 8,
            "image": ""
        },
        "29": {
            "name": "8 of Clubs",
            "value": 8,
            "image": ""
        },
        "30": {
            "name": "8 of Hearts",
            "value": 8,
            "image": ""
        },
        "31": {
            "name": "8 of Spades",
            "value": 8,
            "image": ""
        },
        "32": {
            "name": "9 of Diamonds",
            "value": 9,
            "image": ""
        },
        "33": {
            "name": "9 of Clubs",
            "value": 9,
            "image": ""
        },
        "34": {
            "name": "9 of Hearts",
            "value": 9,
            "image": ""
        },
        "35": {
            "name": "9 of Spades",
            "value": 9,
            "image": ""
        },
        "36": {
            "name": "10 of Diamonds",
            "value": 10,
            "image": ""
        },
        "37": {
            "name": "10 of Clubs",
            "value": 10,
            "image": ""
        },
        "38": {
            "name": "10 of Hearts",
            "value": 10,
            "image": ""
        },
        "39": {
            "name": "10 of Spades",
            "value": 10,
            "image": ""
        },
        "40": {
            "name": "Jack of Diamonds",
            "value": 10,
            "image": ""
        },
        "41": {
            "name": "Jack of Clubs",
            "value": 10,
            "image": ""
        },
        "42": {
            "name": "Jack of Hearts",
            "value": 10,
            "image": ""
        },
        "43": {
            "name": "Jack of Spades",
            "value": 10,
            "image": ""
        },
        "44": {
            "name": "Queen of Diamonds",
            "value": 10,
            "image": ""
        },
        "45": {
            "name": "Queen of Clubs",
            "value": 10,
            "image": ""
        },
        "46": {
            "name": "Queen of Hearts",
            "value": 10,
            "image": ""
        },
        "47": {
            "name": "Queen of Spades",
            "value": 10,
            "image": ""
        },
        "48": {
            "name": "King of Diamonds",
            "value": 10,
            "image": ""
        },
        "49": {
            "name": "King of Clubs",
            "value": 10,
            "image": ""
        },
        "50": {
            "name": "King of Hearts",
            "value": 10,
            "image": ""
        },
        "51": {
            "name": "King of Spades",
            "value": 10,
            "image": ""
        }
    }
}

function shuffleDeck(deck) {
    return Object.keys(deck.cards).sort(() => Math.random() - 0.5)
}

function initialiseGame(numPlayers) {
    const shuffledDeck = shuffleDeck(cardDeck);

    const players = {};
    for (let i = 0; i < numPlayers; i++) {
        players[i] = {
            hand: [],
            score: 0,
            multiplier: -1
        };
    }

    const dealer = {
        hand: [],
        score: 0,
    };

    return { shuffledDeck, players, dealer };
}

function dealCards(gameState) {
    const { shuffledDeck, players, dealer } = gameState;

    for (let i = 0; i < 2; i++) {
        for (const player in players) {
            hitCard(shuffledDeck, players[player]);
        }
        hitCard(shuffledDeck, dealer);
    }

    return gameState;
}

function hitCard(shuffledDeck, player) {
    player.hand.push(shuffledDeck.pop());
    return player.hand;
}

function hitCardDealer(shuffledDeck, dealer) {
    while (calculateHandValue(dealer.hand) <= 15) {
        dealer.hand.push(shuffledDeck.pop());
    }
    return dealer.hand;
}

function calculateHandValue(hand) {
    let sum = 0;
    let numAces = 0;
    
    for (const cardIndex of hand) {
        const card = cardDeck.cards[cardIndex]
        let values = card.value;

        if (Array.isArray(values)) {
            numAces++;
            if (hand.length === 2) {
                values = 11;
            } else {
                values = 10;
            }
        }
        
        sum += values;
    }
    
    if (hand.length === 2) {
        if (numAces === 2) {
            sum = 89; //Ban-Ban
        }
        else if (sum === 21 && numAces === 1) {
            sum = 69; //Ban-Luck
        }    
    }

    while (numAces > 0 && (sum > 21 || hand.length === 4)) {
        sum -= 9;
        numAces--;
    }

    if (hand.length === 5 && sum <= 21) {
        sum = 70; //Wu-Long
    }

    return sum;
}

function determineWinner(playerHand, dealerHand) {
    //const { players, dealer } = gameState;
    //const dealerScore = dealer.score;
    let playerScore = calculateHandValue(playerHand)
    let dealerScore = calculateHandValue(dealerHand)
    let multiplier = -1
    //console.log(playerScore)
    //let arr = [];
    //console.log(players)
    /*for (const player in players) {
        const playerScore = players[player].score;
        */
        if (playerScore > 21 && playerScore < 50 && dealerScore > 21 && dealerScore < 50) {
            multiplier = 0;  //Both bust
        } else if (playerScore > 21 && playerScore < 50 || (playerScore < dealerScore && (dealerScore <= 21 || dealerScore > 50))) {
            if (dealerScore === 80) {
                multiplier = -3; //Dealer Ban-Ban, lose x3
            } else if (dealerScore === 60 || dealerScore === 70) {
                multiplier = -2; //Dealer Ban-Luck/Wu-Long, lose x2
            } else {
                multiplier = -1; //Your luck shit, lose
            }
        } else if (dealerScore > 21 && dealerScore < 50 || playerScore > dealerScore) {
            if (playerScore === 80) {
                multiplier = 3; //Ban-Ban x3
            } else if (playerScore === 60 || playerScore === 70 || (dealerScore > 21 && dealerScore < 50 && dealerHand.length === 5)) {
                multiplier = 2; //Ban-Luck/Wu-Long x2
            } else {
                multiplier = 1; //Normal Win x1
            }
        } else if (playerScore === dealerScore) {
            multiplier = 0; //Same score, Tie
        }
        // } else if (playerScore > dealerScore) {
        //     if (playerScore === 80) {
        //         multiplier = 3; //Ban-Ban x3
        //     } else if (playerScore === 60 || playerScore === 70) {
        //         multiplier = 2; //Ban-Luck/Wu-Long x2
        //     } else {
        //         multiplier = 1; //Normal Win x1
        //     }
        // } else if (dealerScore === 80) {
        //     multiplier = -3; //Dealer Ban-Ban, lose x3
        // } else if (dealerScore === 60 || dealerScore === 70) {
        //     multiplier = -2; //Dealer Ban-Luck/Wu-Long, lose x2
        // } else {
        //     multiplier = -1; //Your luck shit, lose
        // }

        if (playerScore > 21 && playerScore < 50 && playerHand.length === 5) {
            multiplier = -2; //Your luck damn shit, Wu-Long bust, lose dbl
        }

        //arr[player] = players[player].multiplier;
    //}
    //console.log(arr);
    //return arr;
    return multiplier;
}

export {shuffleDeck, dealCards, calculateHandValue, determineWinner, initialiseGame, hitCard, hitCardDealer}
