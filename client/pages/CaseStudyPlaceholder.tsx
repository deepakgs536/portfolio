import { useTheme } from "@/components/layout/theme-provider";
import { useNavigate } from "react-router-dom";

const CaseStudyPlaceholder = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "bg-black" : "bg-white";
  const text = isDark ? "text-white" : "text-black";
  const muted = isDark ? "text-gray-400" : "text-gray-600";
  const btnBg = isDark ? "bg-white" : "bg-black";
  const btnText = isDark ? "text-black" : "text-white";

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 ${bg} transition-colors overflow-hidden`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .slide-in-1 { animation-delay: 0.1s; }
        .slide-in-2 { animation-delay: 0.2s; }
        .slide-in-3 { animation-delay: 0.3s; }
        .slide-in-4 { animation-delay: 0.4s; }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .bg-gradient-animated {
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-float ${isDark ? 'bg-white' : 'bg-black'}`}></div>
        <div 
          className={`absolute bottom-32 right-20 w-40 h-40 rounded-full opacity-10 animate-float ${isDark ? 'bg-white' : 'bg-black'}`}
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className={`absolute top-1/2 right-10 w-24 h-24 rounded-full opacity-10 animate-float ${isDark ? 'bg-white' : 'bg-black'}`}
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <section className="w-full max-w-lg rounded-3xl p-8 md:p-10 relative z-10">
        {/* 404 Number with animation */}
        <div className="text-center mb-4">
          <div className="inline-block relative">
            <p className={`text-7xl md:text-8xl font-black animate-pulse-glow ${muted}`}>
              404
            </p>
            <div className="absolute inset-0 bg-gradient-animated"></div>
          </div>
        </div>

        {/* Title and text with staggered animation */}
        <div className="space-y-3 text-center">
          <h1 className={`text-2xl md:text-3xl font-bold ${text} animate-slide-in slide-in-2`}>
            Oops! Page not found
          </h1>

          <p className={`text-sm md:text-base leading-relaxed ${muted} animate-slide-in slide-in-3`}>
            The page you're trying to reach doesn't exist or may have been moved.
          </p>
        </div>

        {/* Button with animation */}
        <div className="mt-7 flex justify-center">
          <button
            className={`${btnBg} ${btnText} px-6 py-3 rounded-2xl font-semibold text-sm md:text-base hover:opacity-80 transition-all duration-300 animate-slide-in slide-in-4 hover:scale-105 active:scale-95 relative overflow-hidden group`}
            onClick={() => navigate("/")}
          >
            <span className="relative z-10">Go back home</span>
            <div className="absolute inset-0 bg-gradient-animated opacity-0 group-hover:opacity-20"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPlaceholder;