import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { faRoute, faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function LandingPage() {
  const { login, logout, isAuthenticated } = useAuth();
  const [user, setUser] = useState(null);

  return (
    <div>

        
      <h1>Landing Page</h1>
      <FontAwesomeIcon icon={faRoute} className="text-indigo-600 text-2xl" />
      {/* <button onClick={() => login({ name: 'John Doe' })}>Login</button>
      <button onClick={() => logout()}>Logout</button> */}
      {isAuthenticated && <p>Authenticated: {user.name}</p>}
    </div>
  );
}

export default LandingPage;