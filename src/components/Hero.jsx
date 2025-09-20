
import TextField from '@mui/material/TextField';
import SectionWrapper from './sectionWrapper';



const Hero = () => {
  return (
    <div className="flex flex-row justify-around items-center dotted-bg px-4 py-8">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center ml-2 sm:ml-6">
        <div>
        <SectionWrapper
        className="w-full sm:w-1/2 flex flex-col justify-center ml-2 sm:ml-6"
        variant="fadeUp"
        delay={0}
      >
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-relaxed">
            Your Commute, <br />
            <span className="text-blue-500">Without the Traffic</span>
          </p>
          <p className="my-3 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md">
            Reroute proactively monitors your daily drives and sends alerts on
            your phone with faster options before you even step out the door.
          </p>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch w-full max-w-md mx-auto">
  <TextField
    id="outlined-basic"
    size="small"
    fullWidth
    label="Enter your email"
    variant="outlined"
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "white" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
      "& .MuiInputLabel-root": { color: "white" },
      "& .MuiInputBase-input": { color: "white", fontSize: "0.875rem" }, // smaller font
    }}
  />
  <button className="text-white bg-[#dd7d02] rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 mt-2 sm:mt-0 sm:ml-3 text-xs sm:text-base">
    Get Early Access
  </button>
</div>


          {/* Mobile App Coming Soon */}
          <div className="my-4">
            <p className="text-center sm:text-left text-sm sm:text-base">
              Mobile App coming soon
            </p>
          </div>

          {/* Store Buttons */}
          <div className="flex flex-row justify-center sm:justify-start gap-3 sm:gap-6">
            {/* Google Play */}
            <div className="relative h-[45px] sm:h-[60px] w-[120px] sm:w-[200px]">
              <img
                src="/GooglePay.png"
                className="h-full w-full object-contain"
                alt="Google Play"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70 rounded">
                <p className="text-white text-xs sm:text-sm font-semibold">
                  Coming Soon
                </p>
              </div>
            </div>

            {/* App Store */}
            <div className="relative h-[45px] sm:h-[60px] w-[120px] sm:w-[200px]">
              <img
                src="/appleStore.png"
                className="h-full w-full object-contain"
                alt="App Store"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/70 rounded">
                <p className="text-white text-xs sm:text-sm font-semibold">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-center">
        
        <img
          src="/route.jpg"
          className="w-[85%] sm:w-[55%] md:w-[50%] lg:w-[45%] h-auto rounded-lg"
          alt="route"
        />
      </div>
    </div>
  );
};



export default Hero;