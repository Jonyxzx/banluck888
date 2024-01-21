import React from 'react';
import { Container, Typography, Box, Button, TextField, Grid } from '@mui/material';
import Navbar from '../components/navbar';
import paynow from "../assets/PaynowQR.png";
import background from "../assets/PaymentBackground.jpg";
import { writeBalanceData } from "../backend/command";

const PaymentPage = () => {

    const handlePayment = () => {
        writeBalanceData(1000);
    }

    return (
        <>
            <Navbar />
            <Container
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '800px',
                }}>
                <Box>
                    {/* White overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value as needed
                        }}
                    ></Box>

                    <Typography variant="h4" align="center" gutterBottom>
                        Payment Page
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                        Choose your payment method and complete the transaction.
                    </Typography>

                    {/* Payment options */}
                    <Grid container spacing={2} justifyContent="center" mt={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} border={1} borderRadius={8} textAlign="center" sx={{ backgroundColor: 'white', opacity: 0.9 }}>
                                <Typography variant="h6">Credit Card</Typography>
                                <TextField label="Card Number" fullWidth margin="normal" />
                                <TextField label="Expiry Date" fullWidth margin="normal" />
                                <TextField label="CVV" fullWidth margin="normal" />
                                <Button variant="contained" color="primary" fullWidth onClick={handlePayment}>
                                    Pay Now
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box p={3} border={1} borderRadius={8} textAlign="center" sx={{ backgroundColor: 'white', opacity: 0.9 }}>
                                <Typography variant="h6">PayNow</Typography>
                                <img src={paynow} alt="paynow qr" width={250} height={250} />
                                <Button variant="contained" color="secondary" fullWidth onClick={handlePayment}>
                                    Pay with PayNow
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default PaymentPage;
