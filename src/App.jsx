import React from 'react';
import Hero from './components/HeroSection';
import Menu from './components/MenuSection';
import Footer from './pages/Footer';
import NavigationBar from './pages/NavBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
