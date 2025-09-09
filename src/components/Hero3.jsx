import { faClock, faArrowRightToCity, faBell, faEye,faLocationPin} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';

const HeroThree = () => {
    const locationIcon = <FontAwesomeIcon icon={faLocationPin} className="text-indigo-600 text-2xl" />;
    const clockIcon = <FontAwesomeIcon icon={faClock} className="text-indigo-600 text-2xl" />;
    const bellIcon = <FontAwesomeIcon icon={faBell} className="text-indigo-600 text-2xl" />;
    const arrowIcon = <FontAwesomeIcon icon={faArrowRightToCity} className="text-indigo-600 text-2xl" />;
  return (
    <div className=" h-[600px] justify-between  hero-two bg-[#111111]"> 
    
    <p className='text-6xl mb-2 text-center'> How <span className="text-indigo-600 font-semibold">RouteX</span> works</p>

    <p className='text-center text-neutral-500'>Four simple steps to transform your daily commute from stressful to seamless</p>

    <div className='flex flex-row my-12 space-x-2'>
        <Card opacity={100} index={'01'} icon={locationIcon} title="Set Your Routes" description="Add your daily destinations - home, work, gym, or anywhere you go regularly." />
        <Card opacity={100} index={'02'} icon={clockIcon} title="Schedule Your Commute Times" description="Tell Reroute when you typically travel - we'll automatically monitor those times." />
        <Card opacity={100} index={'03'} icon={bellIcon} title="Get a Proactive Alert" description="Receive notifications before you leave if traffic is building up on your usual route.Reroute will send you a notification before you even leave the house." />
        <Card opacity={100} index={'04'} icon={arrowIcon} title="Choose a Faster Alternative" description="View multiple route options with real-time estimates and pick the best one." />
        

    </div>
</div>
  )}
export default HeroThree;