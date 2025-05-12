import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import VueJsIcon from "../../assets/svgs/vuejs.svg";
import NuxtJsIcon from "../../assets/svgs/nuxtjs.svg";
import NextJsIcon from "../../assets/svgs/nextjs.svg";
import NodeJsIcon from "../../assets/svgs/nodejs.svg";
import ExpressIcon from "../../assets/svgs/express.svg";
import ReactIcon from "../../assets/svgs/React-icon.svg";
import MongoDbIcon from "../../assets/svgs/mongodb.svg";
import PostgresIcon from "../../assets/svgs/postgres.svg";
import JavaScriptIcon from "../../assets/svgs/javascript.svg";
import TypeScriptIcon from "../../assets/svgs/typescript.svg";
import PrismaIcon from "../../assets/svgs/icons8-prisma-orm.svg";

interface TechStack {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Database" | "Language" | "ORM";
  description: string;
}

interface Trait {
  title: string;
  description: string;
  icon: string;
}

const traits: Trait[] = [
  {
    title: "Problem Solver",
    description: "I approach challenges with analytical thinking and creative solutions",
    icon: "🔍",
  },
  {
    title: "Team Player",
    description: "Collaborative mindset with strong communication skills",
    icon: "🤝",
  },
  {
    title: "Fast Learner",
    description: "Quick to adapt and master new technologies",
    icon: "🚀",
  },
  {
    title: "Detail Oriented",
    description: "Meticulous attention to code quality and user experience",
    icon: "✨",
  },
];

const techStack: TechStack[] = [
  {
    name: "Vue.js",
    icon: VueJsIcon,
    category: "Frontend",
    description: "Progressive JavaScript framework for building user interfaces",
  },
  {
    name: "Nuxt.js",
    icon: NuxtJsIcon,
    category: "Frontend",
    description: "Vue.js framework for server-side rendering and static site generation",
  },
  {
    name: "Next.js",
    icon: NextJsIcon,
    category: "Frontend",
    description: "React framework for production-grade applications",
  },
  {
    name: "Node.js",
    icon: NodeJsIcon,
    category: "Backend",
    description: "JavaScript runtime for server-side development",
  },
  {
    name: "Express.js",
    icon: ExpressIcon,
    category: "Backend",
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "React.js",
    icon: ReactIcon,
    category: "Frontend",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "MongoDB",
    icon: MongoDbIcon,
    category: "Database",
    description: "NoSQL database for modern applications",
  },
  {
    name: "PostgreSQL",
    icon: PostgresIcon,
    category: "Database",
    description: "Advanced open-source relational database",
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    category: "Language",
    description: "High-level, interpreted programming language",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    category: "Language",
    description: "Typed superset of JavaScript",
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
    category: "ORM",
    description: "Next-generation ORM for Node.js and TypeScript",
  },
];

function WhoIsMe() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (name: string) => {
    setLoadedImages((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16" id="who-is-me">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-rosepine-pine mb-6">
              Who Is Me?
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-rosepine-text/90">
              <p className="leading-relaxed">
                I'm Faizan Ahmad, a passionate Full Stack Developer with a strong
                foundation in both frontend and backend development. My journey in web
                development began with a deep interest in building seamless and
                high-performance applications.
              </p>
              <p className="leading-relaxed">
                Over the years, I've honed my skills across modern frameworks like
                Vue.js, Nuxt.js, React.js, and Node.js. I thrive on creating
                efficient, scalable, and user-centric web solutions that blend
                functionality with elegance.
              </p>
            </div>

            {/* Personal Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className="p-4 rounded-lg bg-rosepine-surface border border-rosepine-overlay hover:border-rosepine-pine transition-colors"
                >
                  <div className="text-2xl mb-2">{trait.icon}</div>
                  <h3 className="text-lg font-semibold text-rosepine-text mb-1">
                    {trait.title}
                  </h3>
                  <p className="text-sm text-rosepine-text/60">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-rosepine-pine mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.map((tech) => (
                <TooltipProvider key={tech.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`relative group cursor-pointer transition-all duration-300 ${
                          loadedImages[tech.name]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-rosepine-surface border border-rosepine-overlay hover:border-rosepine-pine transition-colors">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-12 h-12 object-contain mb-2 transition-all duration-300 group-hover:scale-110"
                            onLoad={() => handleImageLoad(tech.name)}
                          />
                          <span className="text-sm text-rosepine-text/80 text-center">
                            {tech.name}
                          </span>
                          <span className="text-xs text-rosepine-text/40 mt-1">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-rosepine-surface/95 backdrop-blur-sm border border-rosepine-overlay">
                      <p className="font-medium text-rosepine-text/80">{tech.name}</p>
                      <p className="text-sm text-rosepine-text/60">
                        {tech.description}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIsMe;
