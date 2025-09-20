import TextField from "@mui/material/TextField";

const HeroFive = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center hero-two bg-[#111111] px-4 md:px-0">
  {/* Image */}
  <div className="w-full md:w-[50%] h-[20rem] md:h-[40rem] mt-10 md:mt-60 rounded-lg p-4 md:p-8 flex flex-col gap-4 justify-center items-center">
    <img
      src="/herofive.jpg"
      alt="hero"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[50%] h-auto md:h-[40rem] mt-10 md:mt-60 rounded-lg p-4 md:p-8 flex flex-col gap-4">
    {/* Heading */}
    <div>
      <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center md:text-left">
        Don't Miss Out.
        <br />
        <span className="text-indigo-600">Be the First</span> to Experience a
        Stress-Free Commute
      </p>
    </div>

    {/* Subtext */}
    <div>
      <p className="text-neutral-400 text-center md:text-left text-sm md:text-base">
        Join thousands of smart commuters who are ready to transform their daily
        drive. Get exclusive early access for free
      </p>
    </div>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
      <TextField
        id="outlined-basic"
        size="small"
        label="Enter your email"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputBase-input": { color: "white" },
        }}
        className="w-full sm:w-auto"
      />
      <button className="text-white bg-[#dd7d02] rounded-lg px-4 py-2 w-full sm:w-auto">
        Get Early Access
      </button>
    </div>

    {/* Stats Section */}
    <div className="flex flex-col sm:flex-row gap-6 justify-around items-center mt-6">
      <div className="grid place-items-center">
        <p className="font-bold text-xl text-blue-500">12K+</p>
        <p className="text-sm">on Waitlist</p>
      </div>
      <div className="grid place-items-center">
        <p className="font-bold text-xl text-sky-400">Q1 2026</p>
        <p className="text-sm">Launch Date</p>
      </div>
      <div className="grid place-items-center">
        <p className="font-bold text-xl text-[#dd7d02]">Free</p>
        <p className="text-sm">Beta Access</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default HeroFive;
