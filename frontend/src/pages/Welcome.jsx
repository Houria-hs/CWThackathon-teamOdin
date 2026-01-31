import React from 'react';
import { useNavigate } from 'react-router-dom';
import phoneLayout from "../assets/fullPhoneImg.png"
import PremiumButton from '../components/PremiumBtn';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      <div className="w-full max-w-md lg:max-w-2xl bg-white  sm:rounded-[3rem] lg:shadow-2xl flex flex-col items-center text-center animate-in fade-in duration-700">
        
        {/* Header Section */}
        <div className="mt-4 lg:mt-16 space-y-4 lg:px-12 ">
          <h1 className="text-[30px] lg:text-[40px] font-['Sora'] font-bold text-black tracking-tight leading-tight">
            Spot <span className="text-[#0057B8]">unfair clauses</span> instantly
          </h1>
          <p className="text-[#8E8E8E] lg:text-[18px] text-[16px] font-['Sora'] leading-relaxed px-2 ">
            Our AI flags ambiguous terms and potentially unfair clauses, 
            helping you make informed decisions before signing anything.
          </p>
        </div>

       {/* The Graphic Mockup - Floating Animation */}
        <div className="relative my-10 lg:my-14 w-full flex justify-center group ">
          {/* Glowing Aura behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-blue-400/20 rounded-full blur-[60px] group-hover:bg-blue-400/30 transition-colors duration-700"></div>
          
          <div className="relative z-10 w-60 lg:w-72  flex flex-col animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
            {/* The Floating Effect Class */}
            <div className="animate-[float_6s_ease-in-out_infinite]">
              <img 
                src={phoneLayout} 
                alt="Phone Layout" 
                className=" transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full lg:px-20 lg:pb-16 space-y-5 px-2 mt-auto pb-6">
          
            <PremiumButton 
                text="Get Started" 
                onClick={() => navigate("/register")}
            />
          <button
            onClick={() => navigate("/login")}
            className="block font-['Sora'] text-[16px] w-full text-[#333333] text-[14px] hover:text-[#00ABFF] transition-colors"
          >
            I already have an account
          </button>
        </div>
        {/* a small decorative element for laptop */}
        <div className="hidden lg:block absolute bottom-4 text-[10px] text-gray-300 font-medium">
          Secure • AI-Powered • Legal Companion
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .fill-mode-both { animation-fill-mode: both; }
      `}} />
      </div>
    </div>
  );
};

export default WelcomeScreen;