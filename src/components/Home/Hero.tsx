import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface NavItem {
  key: string;
  value: string;
  description: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { 
    key: "Who Is Me", 
    value: "who-is-me", 
    description: "Learn more about my background and experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  { 
    key: "What I Do", 
    value: "what-i-do", 
    description: "Explore my skills and services",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    key: "Why Me", 
    value: "why-me", 
    description: "Discover what makes me unique",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
];

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyPress = (event: React.KeyboardEvent, sectionId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const navItemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.4 + index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="h-[92vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rosepine-pine"></div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 relative overflow-hidden ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-rosepine-base via-rosepine-surface to-rosepine-overlay opacity-50 animate-gradient"></div>
      
      {/* Main content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center"
      >
        <div className="font-rubik font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <div className="text-center">
            Hello, I Am{" "}
            <motion.span 
              className="text-rosepine-pine relative inline-block group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              Faizan Ahmad
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-rosepine-pine transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </motion.span>
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-rosepine-subtle font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4"
          >
            Full Stack Developer
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-center gap-5 sm:gap-6 mt-6 sm:mt-8"
        >
          <motion.a
            href="https://github.com/faizan-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rosepine-text/60 hover:text-rosepine-pine transition-colors"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/faizan-20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rosepine-text/60 hover:text-rosepine-pine transition-colors"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
          <motion.a
            href="mailto:faizan.20a@gmail.com"
            className="text-rosepine-text/60 hover:text-rosepine-pine transition-colors"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Navigation Items */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-20 text-base sm:text-lg md:text-xl font-bold text-rosepine-iris/30 mt-12 sm:mt-16 md:mt-24 lg:mt-32"
      >
        {navItems.map((item, index) => (
          <TooltipProvider key={item.value}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  role="button"
                  tabIndex={0}
                  className="relative group cursor-pointer transition-all duration-300 hover:text-rosepine-iris/80 p-4 focus:outline-none focus:ring-2 focus:ring-rosepine-pine rounded-lg"
                  onClick={() => scrollToSection(item.value)}
                  onKeyPress={(e) => handleKeyPress(e, item.value)}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.key}
                  </div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-rosepine-text/50"
      >
        <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Hero;
