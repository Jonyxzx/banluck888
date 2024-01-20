import './App.css';
import { Container, Typography, Box } from '@mui/material'
import Homepage from './pages/Homepage'
import Registerpage from './pages/Registerpage'
import Paymentpage from './pages/Paymentpage'
import Navbar from './components/navbar'
import Menupage from './pages/Menupage'
import Game from './pages/Game'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Container>
      <Box>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route path="/payment" element={<Paymentpage/>}/>
            <Route path="/menu" element={<Menupage/>}/>
            <Route path="/header" element={<Navbar/>}/>
            <Route path="/game" element={<Game/>}/>
          </Routes>
            
          </BrowserRouter>
      </Box>
    </Container>
    </>
  );
}

export default App;
