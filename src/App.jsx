import React from 'react';
import AboutPage from './pages/AboutPage';
import Accueil from './pages/AccueilPage';
import CommandePage from './pages/CommandePage';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';
import MenuPage from './pages/MenuPage';
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
      <CommandePage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
