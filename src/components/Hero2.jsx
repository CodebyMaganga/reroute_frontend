import { faClock, faHeartPulse, faGear, faBell, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeroTwo = () => {
    return (
      <div className="flex flex-col lg:flex-row justify-around items-center hero-two px-4 py-10 lg:h-[700px]">
        {/* Left Section - Image (Hidden on mobile) */}
        <div className="hidden lg:flex w-1/2 justify-center">
          <img
            src="/tH-TRAFFICC.jpg"
            className="w-[85%] h-auto rounded-lg my-4"
            alt="route"
          />
        </div>
  
        {/* Right Section - Text + Features */}
        <div className="flex flex-col gap-6 justify-center w-full lg:w-1/2 px-3 sm:px-5">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl my-4 font-bold leading-snug">
            Tired of being{" "}
            <span className="text-[#dd7d02] font-semibold">Stuck in Traffic?</span>
          </p>
  
          {/* Feature 1 */}
          <div className="flex flex-row space-x-3 sm:space-x-4">
            <div>
              <div className="bg-[#dd7d02] p-2 sm:p-3 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-indigo-600 text-lg sm:text-xl md:text-2xl"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Smart Alerts
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base">
                Get notified before congestion builds up — so you can plan ahead
                instead of reacting too late.
              </p>
            </div>
          </div>
  
          {/* Feature 2 */}
          <div className="flex flex-row space-x-3 sm:space-x-4">
            <div>
              <div className="bg-[#dd7d02] p-2 sm:p-3 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-indigo-600 text-lg sm:text-xl md:text-2xl"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Remote Monitoring
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base">
                Track traffic conditions in real time without being there. Stay in
                control from anywhere.
              </p>
            </div>
          </div>
  
          {/* Feature 3 */}
          <div className="flex flex-row space-x-3 sm:space-x-4">
            <div>
              <div className="bg-[#dd7d02] p-2 sm:p-3 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-indigo-600 text-lg sm:text-xl md:text-2xl"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Smarter Decisions
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base">
                Know the best time to leave and the fastest route to take, so
                traffic never dictates your day.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  

export default HeroTwo;
       