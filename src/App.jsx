import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import CommandePage from './pages/CommandesPage';
import ContactPage from './pages/ContactsPage';
import Footer from './pages/Footer';
import MenuPage from './pages/MenusPage';
import NavigationBar from './pages/NavBar';
import NotificationsPage from './pages/NotificationsPage';
import ReservationPage from './pages/ReservationsPage';

function App() {
  return (
    <div>
      <NavigationBar />
      <AccueilPage />
      <AboutPage />
      <MenuPage />
      <ReservationPage />
      <CommandePage />
      <ContactPage />
      <Footer />
      <NotificationsPage />
    </div>
  );
}

export default App;
