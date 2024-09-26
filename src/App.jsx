import React from 'react';
import AboutPage from './pages/AboutPage';
import Accueil from './pages/AccueilSectionPage';
import Footer from './pages/Footer';
import MenuPage from './pages/MenuSectionPage';
import NavigationBar from './pages/NavBar';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <div>
      <NavigationBar />
      <Accueil />
      <AboutPage />
      <MenuPage />
      <ReservationPage />
      <Footer />
    </div>
  );
}

export default App;
