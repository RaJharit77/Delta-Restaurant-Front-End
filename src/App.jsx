import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import CommandePage from './pages/CommandesPage';
import ContactPage from './pages/ContactsPage';
import Footer from './pages/Footer';
import MenuPage from './pages/MenusPage';
import NavigationBar from './pages/NavBar';
import NotificationsPage from './pages/NotificationsPage';
import ReservationPage from './pages/ReservationsPage';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

const KNOWN_PATHS = ['/', '/index.html'];

function App() {
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  const isKnownPath = KNOWN_PATHS.includes(currentPath);

  return (
    <ErrorBoundary>
      {isKnownPath ? (
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
      ) : (
        <>
          <NavigationBar />
          <NotFound
            title="Page introuvable"
            message={`La page "${currentPath}" n'existe pas sur notre site.`}
          />
          <Footer />
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
