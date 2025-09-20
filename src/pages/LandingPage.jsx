import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { faRoute, faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import HeroTwo from '../components/Hero2.jsx';
import HeroThree from '../components/Hero3.jsx';
import HeroFour from '../components/Hero4.jsx';
import HeroFive from '../components/Hero5.jsx';
import Footer from '../components/Footer.jsx';


function LandingPage() {
  const { login, logout, isAuthenticated } = useAuth();
  const [user, setUser] = useState(null);

  return (
    <div>

        <Navbar />
        <Hero />
        <HeroTwo />
        <HeroThree />
        <HeroFour />
        <HeroFive />
        <Footer />
      
    </div>
  );
}

export default LandingPage;