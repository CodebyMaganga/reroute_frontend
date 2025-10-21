import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../ui/button";
import CustomInput from "../ui/input";
import CustomLabel from "../ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faRoute, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
    console.log(isLogin ? "Login data:" : "Register data:", form);
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
         1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
         3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 
         1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
         20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
         8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 
         2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 
         7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center p-4 dotted-bg">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#9AA6F8]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0. + Math.random() * 2}s`,
            }}
          />
        ))}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#1a2332]/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div
              onClick={() => navigate("/")}
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer"
            >
              <FontAwesomeIcon icon={faRoute} className="text-[#BCC3FA] text-2xl" />
            </div>
          </div>

          {/* Animated Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-white text-2xl mb-1">
                  {isLogin ? "Welcome Back to RouteX" : "Create Your RouteX Account"}
                </h1>
                <p className="text-gray-400 text-sm">
                  {isLogin
                    ? "Your smarter way to navigate"
                    : "Join and start rerouting your path"}
                </p>
              </div>

              {/* Google */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mb-6">
                <CustomButton
                  variant="outlined"
                  label={`${isLogin ? "Login" : "Register"} with Google`}
                  icon={<GoogleIcon />}
                  onClick={() => console.log("Google Auth")}
                  className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 text-white h-11"
                />
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#1a2332] px-2 text-gray-500">OR</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <CustomLabel text="Full Name" htmlFor="name" className="text-sm" />
                    <CustomInput
                      label="Full Name"
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="text-white h-11 my-6"
                      required
                    />
                  </>
                )}
      

      
                <div className="mt-4">
                <CustomLabel text="Email" htmlFor="email" className="text-sm" />
                </div>
                <div className="relative">     
                  <CustomInput
                  
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="text-white h-11 pr-10"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-neutral-400" />
                  </div>
                </div>

                <CustomLabel text="Password" htmlFor="password" className="text-sm" />
                <div className="relative">
                  <CustomInput
                  label="Password"
                    id="password"
                    type="password"
                    placeholder="Enter your password..."
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="text-white h-11 pr-10"
                    required
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FontAwesomeIcon icon={faLock} className="text-neutral-400" />
                  </div>
                </div>
<div className="grid place-items-center">
                <CustomButton
                onClick={handleSubmit}
  type="submit"
  color="#9aa6f8"
  label={isLogin ? "Login with Email" : "Register Account"}
  className="w-full text-white h-11 shadow-lg shadow-blue-500/20"
/>

                </div>
              </form>

              {/* Toggle */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    {isLogin ? "Sign up" : "Login instead"}
                  </button>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center space-y-2">
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
