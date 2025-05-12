import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Achievement {
  title: string;
  value: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Users Served",
    value: "50K+",
    description: "Through Health Potli pharmacy portal",
  },
  {
    title: "Experts Empowered",
    value: "500+",
    description: "On AdviceBazaar consultation platform",
  },
  {
    title: "Years Experience",
    value: "3+",
    description: "In full-stack development",
  },
];

function WhatIDo() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16" id="what-i-do">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-rosepine-pine">
              What I Do
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-rosepine-text/90">
              <p className="leading-relaxed">
                I'm a full-stack developer passionate about building scalable web applications 
                and impactful digital experiences. With hands-on experience at CodeNicely and 
                Jio Platforms Limited, I've delivered high-performing frontend and backend 
                solutions using modern JavaScript frameworks like Vue.js, Nuxt.js, and React.
              </p>
              <p className="leading-relaxed">
                My work spans from crafting seamless user interfaces to building secure APIs, 
                integrating databases, and deploying robust admin systems. I've led development 
                on live platforms like Health Potli—a pharmacy portal serving over 50,000 users—and 
                AdviceBazaar, a consultation platform empowering 500+ experts.
              </p>
              <p className="leading-relaxed">
                Whether it's streamlining booking flows, implementing notification systems, or 
                enhancing admin efficiency, I build solutions that are functional, secure, and 
                user-friendly.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {achievements.map((achievement) => (
              <TooltipProvider key={achievement.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay hover:border-rosepine-pine transition-colors cursor-help">
                      <div className="text-3xl font-bold text-rosepine-love mb-2">
                        {achievement.value}
                      </div>
                      <div className="text-lg font-semibold text-rosepine-text mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-rosepine-text/60">
                        {achievement.description}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-rosepine-surface/95 backdrop-blur-sm border border-rosepine-overlay">
                    <p className="text-rosepine-text/80">{achievement.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-rosepine-pine mb-8">Core Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay">
              <h4 className="text-xl font-semibold text-rosepine-text mb-4">Frontend Development</h4>
              <ul className="space-y-2 text-rosepine-text/80">
                <li>• Vue.js & Nuxt.js</li>
                <li>• React & Next.js</li>
                <li>• Responsive Design</li>
                <li>• UI/UX Implementation</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay">
              <h4 className="text-xl font-semibold text-rosepine-text mb-4">Backend Development</h4>
              <ul className="space-y-2 text-rosepine-text/80">
                <li>• Node.js & Express</li>
                <li>• RESTful APIs</li>
                <li>• Database Integration</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay">
              <h4 className="text-xl font-semibold text-rosepine-text mb-4">DevOps & Tools</h4>
              <ul className="space-y-2 text-rosepine-text/80">
                <li>• Git & Version Control</li>
                <li>• CI/CD Pipelines</li>
                <li>• Docker & Deployment</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
