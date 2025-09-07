import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { faRoute, faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import HeroTwo from '../components/Hero2.jsx';


function LandingPage() {
  const { login, logout, isAuthenticated } = useAuth();
  const [user, setUser] = useState(null);

  return (
    <div>

        <Navbar />
        <Hero />
        <HeroTwo />
      
    </div>
  );
}

export default LandingPage;