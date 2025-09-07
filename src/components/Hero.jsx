
import TextField from '@mui/material/TextField';
const Hero = () => {
  return (
    <div className="flex flex-row  justify-around space-x-6 dotted-bg">
        <div className="w-1/2 flex  ml-8 flex-col  justify-center">
            <div className='ml-8'>
            <p className='text-5xl font-extrabold leading-relaxed'>Your Commute ,<br /> <span className="text-blue-500">Without the Traffic</span></p>
            <p className="my-4">Reroute proactively monitors your daily drives and alerts you with faster options before you even step out the door.</p>
            <div className=''>
            <TextField
  id="outlined-basic"
  size="small"
  label="Enter your email"
  variant="outlined"
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",   // default border
      },
      "&:hover fieldset": {
        borderColor: "white",   // hover border
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",   // focused border
      },
    },
    "& .MuiInputLabel-root": {
      color: "white", // label color
    },
    "& .MuiInputBase-input": {
      color: "white", // text color inside input
    },
  }}
/>
<button  className="text-white bg-[#dd7d02] rounded-lg px-4 mx-4 py-2">Get Early Access</button>

            </div>
            <div className='my-6'>
                <p className=" text-center">Mobile App coming soon</p>
            </div>
            <div className="flex flex-row justify-between">
  {/* Google Play */}
  <div className="relative h-[60px] mx-9">
    <img
      src="/GooglePay.png"
      className="h-full object-contain"
      alt="Google Play"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70  rounded">
      <p className="text-white text-sm font-semibold">Coming Soon</p>
    </div>
  </div>

  {/* App Store */}
  <div className="relative h-[60px] mx-9">
    <img
      src="/appleStore.png"
      className="h-full object-contain"
      alt="App Store"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70 rounded">
      <p className="text-white text-sm font-semibold">Coming Soon</p>
    </div>
  </div>
</div>


            </div>
        </div>
        <div className="w-1/2 px-5">
            <img src='/route.jpg' className='w-1/2 h-[90%] mx-9 my-4 rounded-lg' alt="route"  />
        </div>

    </div>
  );
};

export default Hero;