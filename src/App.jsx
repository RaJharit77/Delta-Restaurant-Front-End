import React from 'react';
import AboutPage from './pages/AboutPage';
import Accueil from './pages/AccueilPage';
import CommandePage from './pages/CommandesPage';
import ContactPage from './pages/ContactsPage';
import Footer from './pages/Footer';
import MenuPage from './pages/MenusPage';
import NavigationBar from './pages/NavBar';
import ReservationPage from './pages/ReservationsPage';

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
