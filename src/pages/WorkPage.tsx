import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PageMetadata from "@/components/PageMetadata";

interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

interface Project {
  name: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Skill {
  category: string;
  items: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "CodeNicely",
    period: "June 2024 - Present",
    achievements: [
      "Provided team support and enforced code quality standards, contributing to a 95% project success rate",
      "Facilitated transparent client communication to align project goals and ensure timely delivery",
      "Developed and maintained 2 major client projects using Vue.js and Nuxt.js"
    ]
  },
  {
    role: "Web Developer Trainee",
    company: "Jio Platforms Limited",
    period: "July 2023 - January 2024",
    achievements: [
      "Built a high-performance Gaming Controller Configuration Portal with full CRUD functionality using React, Express and MongoDB",
      "Integrated Passport.js and JWT for secure user authentication and authorization",
      "Collaborated with the project manager to deliver project milestones successfully"
    ]
  }
];

const projects: Project[] = [
  {
    name: "Health Potli",
    period: "March 2025 - Present",
    description: "Online pharmacy portal serving 50,000+ customers across 10+ cities, with over 1 million orders fulfilled",
    achievements: [
      "Developed a Pathology Services module, enabling online test bookings and contributing to a 20% estimated increase in service-related user traffic",
      "Built a flexible Notification Scheduling system (Send Now, Once, Daily), improving customer communication and boosting notification engagement by ~25%",
      "Integrated a centralized Customer Details page into the OMS, improving order management and reducing support response times by 30%",
      "Implemented a dynamic Image Linking module for product management, reducing image-related listing errors by over 40%"
    ]
  },
  {
    name: "AdviceBazaar",
    period: "September 2024 - Present",
    description: "Expert consultation platform supporting 500+ experts and 5,000+ bookings, connecting clients with professionals across 15+ fields",
    achievements: [
      "Built and dynamically configured 30+ individual category banners, adding support for featured services per category",
      "Developed a dedicated Payments tab for experts, providing clear visibility into transactions and earnings, reducing finance-related queries by ~40%",
      "Redesigned core UI flows, including booking, rescheduling, and cancellation on both client and admin sides",
      "Engineered a robust Admin Panel to manage advisors, payments, cancellations, and categories—enhancing admin efficiency and reducing manual overhead by 50%",
      "Implemented a profile verification and featuring system for experts, encouraging profile completion and increasing verified expert listings by 30%"
    ]
  }
];

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "Vue.js", "Nuxt.js", "TailwindCSS", "HTML", "CSS", "SCSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git/GitHub", "Unix/Linux", "Docker", "AWS"]
  },
  {
    category: "Security & Authentication",
    items: ["Passport.js", "JWT"]
  }
];

function WorkPage() {
  return (
    <>
      <PageMetadata 
        title="Work Experience"
        description="My professional journey, skills, and expertise in software development"
      />
      <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16" id="work">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-rosepine-pine mb-6">
              Work Experience
            </h2>
            <p className="text-lg md:text-xl text-rosepine-text/80 max-w-3xl mx-auto">
              My professional journey and expertise in software development
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12 mb-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-rosepine-pine"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rosepine-pine" />
                <div className="bg-rosepine-surface p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-rosepine-text mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-rosepine-pine mb-2">{exp.company}</p>
                  <p className="text-rosepine-text/60 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-rosepine-text/80 flex items-start">
                        <span className="text-rosepine-pine mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-rosepine-pine mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-rosepine-surface p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-rosepine-text mb-1">
                    {project.name}
                  </h3>
                  <p className="text-rosepine-text/60 mb-2">{project.period}</p>
                  <p className="text-rosepine-text/80 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-rosepine-text/80 flex items-start">
                        <span className="text-rosepine-pine mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-rosepine-pine mb-8 text-center">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-rosepine-surface p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-rosepine-pine mb-6 flex items-center gap-2">
                    <span className="text-2xl">
                      {skill.category === "Frontend" && "🎨"}
                      {skill.category === "Backend" && "⚙️"}
                      {skill.category === "DevOps & Tools" && "🛠️"}
                      {skill.category === "Security & Authentication" && "🔒"}
                    </span>
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <TooltipProvider key={item}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="px-3 py-1.5 text-sm rounded-full bg-rosepine-pine/10 text-rosepine-text/80 hover:bg-rosepine-pine/20 hover:text-rosepine-pine transition-colors cursor-default">
                              {item}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-rosepine-pine mb-8">
              Education
            </h2>
            <div className="bg-rosepine-surface p-6 rounded-lg inline-block">
              <h3 className="text-xl font-semibold text-rosepine-text mb-2">
                OP Jindal University, Raigarh
              </h3>
              <p className="text-rosepine-text/80">
                B.Tech, Computer Science Engineering | CGPA - 8.5
              </p>
              <p className="text-rosepine-text/60 mt-2">2020 - 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default WorkPage; 