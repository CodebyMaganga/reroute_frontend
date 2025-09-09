import { faClock, faHeartPulse, faGear, faBell, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeroTwo = () => {
  return (
    <div className="flex flex-row h-[700px] justify-around hero-two"> 
    <div className="w-1/2 flex  ml-8 flex-col  justify-center">
        <img src='/tH-TRAFFICC.jpg' className=' h-[90%] mx-9 my-4 rounded-lg ' alt="route"  />
    </div>
    <div className="flex flex-col gap-8 justify-center w-1/2 px-5">

        <p className='text-6xl my-6'>Tired of being <span className="text-[#dd7d02] font-semibold">Stuck in Traffic?</span> </p>
        <div className='flex flex-row space-x-4'>
            <div >
               <div className='bg-[#dd7d02] p-2 rounded-lg'>
                <FontAwesomeIcon icon={faBell} className="text-indigo-600 text-2xl" />
                </div>
            </div>
            <div>
            <p className='font-semibold'>Smart Alerts</p>
            <p className='text-neutral-400'>Get notified before congestion builds up — so you can plan ahead instead of reacting too late.</p>
            </div>
            
        </div>
        <div className='flex flex-row space-x-4'>
            <div >
                <div className='bg-[#dd7d02] p-2 rounded-lg'>
            <FontAwesomeIcon icon={faEye} className="text-indigo-600 text-2xl" />
            </div>
            </div>
            <div>
            <p className='font-semibold'>Remote Monitoring</p>
            <p className='text-neutral-400'>Track traffic conditions in real time without being there. Stay in control from anywhere.</p>
            </div>
        </div>
        <div className='flex flex-row space-x-4'>
            <div  >
                <div className='bg-[#dd7d02] p-2 rounded-lg'>
            <FontAwesomeIcon icon={faGear} className="text-indigo-600 text-2xl" />
            </div>
            </div>
            <div>
            <p className='font-semibold'>Smarter Decisions</p>
            <p className='text-neutral-400'>Know the best time to leave and the fastest route to take, so traffic never dictates your day.</p>
            </div>
        </div>
    </div>
    </div>
  )}

export default HeroTwo;
       