import { faClock, faHeartPulse, faGear} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeroTwo = () => {
  return (
    <div className="flex flex-row h-[700px] justify-around "> 
    <div className="w-1/2 flex  ml-8 flex-col  justify-center">
        <img src='/tH-TRAFFICC.jpg' className=' h-[90%] mx-9 my-4 rounded-lg ' alt="route"  />
    </div>
    <div className="flex flex-col justify-center w-1/2 px-5">

        <p className='text-6xl'>Tired of being <span>Stuck in Traffic?</span> </p>
        <div className='flex flex-row space-x-4'>
            <div>
               
                <FontAwesomeIcon icon={faClock} className="text-indigo-600 text-2xl" />
            </div>
            <div>
            <p>Wasted Time Every Day</p>
            <p>Average commuters lose 99 hours per year sitting in traffic – time you'll never get back</p>
            </div>
            
        </div>
        <div className='flex flex-row space-x-4'>
            <div>
            <FontAwesomeIcon icon={faHeartPulse} className="text-indigo-600 text-2xl" />
            </div>
            <div>
            <p>Stress & Frustration</p>
            <p>Unexpected delays, missed meetings, and the constant anxiety about when you'll actually arrive.</p>
            </div>
        </div>
        <div className='flex flex-row space-x-4'>
            <div >
            <FontAwesomeIcon icon={faGear} className="text-indigo-600 text-2xl" />
            </div>
            <div>
            <p>Reactive Solutions</p>
            <p>Current apps only help once you're already stuck. By then, it's too late to avoid the worst delays.</p>
            </div>
        </div>
    </div>
    </div>
  )}

export default HeroTwo;
       