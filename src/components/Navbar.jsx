import { faRoute, faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around bg-[#11182A] items-center p-2 0 ">
        <div className="flex flex-row items-center p-2 space-x-2">
        
      <FontAwesomeIcon icon={faRoute} className="text-indigo-600 text-2xl" />
      <h1 >RerouteX</h1>
      </div>
        <div className="flex flex-row items-center space-x-6">
            <p>Home</p>
            <p>Features</p>
            <p>How it works</p>
            <p>Join Waitlist</p>
        </div>
        <div>
            <button  className="text-white bg-[#dd7d02] rounded-lg px-4 py-2">Get Early Access</button>
        </div>
    </div>
  );
};

export default Navbar;