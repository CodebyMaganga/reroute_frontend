import { faClock, faArrowRightToCity, faBell, faEye,faLocationPin, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';


const locationIcon = <FontAwesomeIcon icon={faLocationPin} className="text-indigo-600 text-2xl" />;
const bellIcon = <FontAwesomeIcon icon={faBell} className="text-indigo-600 text-2xl" />;
const calendarIcon = <FontAwesomeIcon icon={faCalendar} className="text-indigo-600 text-2xl" />;

const HeroFour = () => {
  return (
    <div className="relative flex flex-col h-[700px] justify-around overflow-hidden ">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-[#3c3c3c] animate-gradient" />
  
    {/* Content on top */}
    <div className="relative z-10 flex flex-col text-center mt-2 hero">
      <p className="text-5xl font-bold">
        Why <span className="text-indigo-600">RouteX</span> is Different
      </p>
      <p className="text-neutral-400 my-4">
        Unlike reactive navigation apps, Reroute works proactively to prevent you from getting stuck in traffic in the first place
      </p>
    </div>
  
    <div className="relative z-10 flex flex-row justify-around items-center">
      <Card
        opacity={40}
        icon={locationIcon}
        title="Real-Time Traffic Monitoring"
        description="Reroute proactively monitors your daily drives and alerts you with faster options before you even step out the door."
      />
      <Card
        opacity={30}
        icon={bellIcon}
        title="Proactive Alerts"
        description = "Get notified before you leave home when traffic builds up. No more discovering delays when it's too late to change your plans."
      />
        <Card
        opacity={10}
        icon={calendarIcon}
        title="Smart Scheduling"
        description="Set up automated monitoring for your daily routines. Schedule checks for weekday commutes, weekend trips, or any recurring journey."
      />
    </div>
  </div>
  
  )}

  export default HeroFour;