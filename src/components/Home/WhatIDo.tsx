import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  value: string;
  description: string;
  icon: string;
}

interface Skill {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const achievements: Achievement[] = [
  {
    title: "Users Served",
    value: "50K+",
    description: "Through Health Potli pharmacy portal",
    icon: "👥"
  },
  {
    title: "Experts Empowered",
    value: "500+",
    description: "On AdviceBazaar consultation platform",
    icon: "👨‍💻"
  },
  {
    title: "Years Experience",
    value: "3+",
    description: "In full-stack development",
    icon: "⏳"
  },
];

const skills: Skill[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: "🎨",
    details: [
      "Vue.js & Nuxt.js",
      "React & Next.js",
      "Responsive Design",
      "UI/UX Implementation"
    ]
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side solutions",
    icon: "⚙️",
    details: [
      "Node.js & Express",
      "RESTful APIs",
      "Database Integration",
      "Authentication & Security"
    ]
  },
  {
    title: "DevOps & Tools",
    description: "Streamlining development and deployment processes",
    icon: "🛠️",
    details: [
      "Git & Version Control",
      "CI/CD Pipelines",
      "Docker & Deployment",
      "Performance Optimization"
    ]
  }
];

function WhatIDo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.3
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16" id="what-i-do">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Content */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-rosepine-pine mb-6"
              variants={itemVariants}
            >
              What I Do
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg md:text-xl text-rosepine-text/90"
              variants={itemVariants}
            >
              <p className="leading-relaxed">
                As a Full Stack Developer, I specialize in building modern web
                applications that are both powerful and user-friendly. My approach
                combines technical expertise with a keen eye for design and user
                experience.
              </p>
              <p className="leading-relaxed">
                I work with cutting-edge technologies to create scalable solutions
                that meet business needs while maintaining high performance and
                security standards.
              </p>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay hover:border-rosepine-pine transition-colors"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-3xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-rosepine-text mb-2">
                  {achievement.title}
                </h3>
                <p className="text-rosepine-text/60">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay hover:border-rosepine-pine transition-colors"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-2xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-rosepine-text mb-3">
                  {skill.title}
                </h3>
                <p className="text-rosepine-text/60 mb-4">
                  {skill.description}
                </p>
                <ul className="space-y-2">
                  {skill.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-rosepine-text/80"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-rosepine-pine mr-2">•</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhatIDo;
