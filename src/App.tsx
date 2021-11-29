import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routers } from './Routes';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Routers />
      <Footer />
    </Router>
  );
}

export default App;
