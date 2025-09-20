import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
      <footer className="bg-[#11182A] text-gray-300 py-12">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faRoute} className="text-indigo-600 text-2xl" />
            <h1 className="text-lg font-semibold">RouteX</h1>
          </div>
  
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400">Features</a></li>
              <li><a href="#" className="hover:text-sky-400">How It Works</a></li>
              <li><a href="#" className="hover:text-sky-400">Coming Soon</a></li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400">Careers</a></li>
            </ul>
          </div>
  
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sky-400">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 text-center px-4">
          <p>© 2025 Reroute. All rights reserved.</p>
          <p className="mt-2">Follow us for launch updates:</p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-3 flex-wrap">
            <FontAwesomeIcon icon={faTwitter} className="text-sky-400 hover:text-white cursor-pointer" />
            <FontAwesomeIcon icon={faFacebook} className="text-sky-400 hover:text-white cursor-pointer" />
            <FontAwesomeIcon icon={faGithub} className="text-sky-400 hover:text-white cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="text-sky-400 hover:text-white cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="text-sky-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;