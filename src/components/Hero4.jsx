import { faClock, faArrowRightToCity, faBell, faEye,faLocationPin, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';


const locationIcon = <FontAwesomeIcon icon={faLocationPin} className="text-indigo-600 text-2xl" />;
const bellIcon = <FontAwesomeIcon icon={faBell} className="text-indigo-600 text-2xl" />;
const calendarIcon = <FontAwesomeIcon icon={faCalendar} className="text-indigo-600 text-2xl" />;

const HeroFour = () => {
  return (
    <div className="relative">
      <div className="relative flex flex-col min-h-[700px] justify-around overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#3c3c3c] animate-gradient" />

        {/* Content on top */}
        <div className="relative z-10 flex flex-col text-center mt-6 px-4 hero">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Why <span className="text-indigo-600">RouteX</span> is Different
          </p>
          <p className="text-neutral-400 my-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Unlike reactive navigation apps, Reroute works proactively to prevent you from
            getting stuck in traffic in the first place
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-6 px-4 mt-6">
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
            description="Get notified before you leave home when traffic builds up. No more discovering delays when it's too late to change your plans."
          />
          <Card
            opacity={10}
            icon={calendarIcon}
            title="Smart Scheduling"
            description="Set up automated monitoring for your daily routines. Schedule checks for weekday commutes, weekend trips, or any recurring journey."
          />
        </div>
      </div>

      {/* Stats Box */}
      <div className="hidden sm:flex justify-center items-center absolute bottom-[-10rem] w-full px-4">
  <div className="bg-sky-400 text-white w-full sm:w-[85%] lg:w-[75%] p-6 sm:p-8 rounded-lg flex flex-col gap-4 justify-center items-center shadow-lg">
    {/* Heading */}
    <p className="font-bold text-2xl sm:text-3xl text-center">
      Save Hours Every Week
    </p>
    <p className="text-neutral-100 text-center text-sm sm:text-base max-w-2xl">
      Early beta users report saving an average of 5-8 hours per week by avoiding
      traffic before it happens
    </p>

    {/* Stats Row */}
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-around items-center w-full">
      <div className="grid place-items-center">
        <p className="font-bold text-xl sm:text-2xl">5-8</p>
        <p className="text-sm">Hours Saved/Week</p>
      </div>
      <div className="grid place-items-center">
        <p className="font-bold text-xl sm:text-2xl">92%</p>
        <p className="text-sm">Less Stress</p>
      </div>
      <div className="grid place-items-center">
        <p className="font-bold text-xl sm:text-2xl">15min</p>
        <p className="text-sm">Earlier Alerts</p>
      </div>
    </div>
  </div>
      </div>

    </div>
  );
};


  export default HeroFour;