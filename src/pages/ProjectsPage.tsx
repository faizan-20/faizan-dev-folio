import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PageMetadata from "@/components/PageMetadata";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
}

const projects: Project[] = [
    {
        title: "Health Potli",
        description: "Online pharmacy portal serving 50,000+ customers across 10+ cities, with over 1 million orders fulfilled",
        technologies: ["Vue.js", "Nuxt.js", "Django", "PostgreSQL"],
        demoUrl: "https://healthpotli.com",
    },
    {
        title: "AdviceBazaar",
        description: "Expert consultation platform supporting 500+ experts and 5,000+ bookings, connecting clients with professionals across 15+ fields",
        technologies: ["Nuxt.js", "Django", "PostgreSQL"],
        demoUrl: "https://advicebazaar.com",
    },
    {
        title: "Kira Software",
        description: "An open-source project management tool inspired by Jira, built with MERN stack. Features include project creation/deletion, issue tracking, role-based access control, and real-time updates. The application uses JWT authentication and Cloudinary for image storage.",
        technologies: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS", "shadcn/ui"],
        githubUrl: "https://github.com/faizan-20/project-management-client",
        demoUrl: "https://kira-software.vercel.app",
    },
    {
        title: "Real-time Messaging App",
        description: "A full-stack real-time chat application built with MERN stack and Socket.IO. Features include real-time messaging, user authentication, and a modern UI built with Tailwind CSS and shadcn/ui.",
        technologies: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "shadcn/ui"],
        githubUrl: "https://github.com/faizan-20/messaging-app",
        demoUrl: "https://messaging-app-ochre.vercel.app",
    },
    {
        title: "Dotfiles",
        description: "My personal dotfiles repository, featuring a modern Linux development environment setup with Hyprland, Neovim, and other tools. Includes configurations for window management, terminal, and development tools.",
        technologies: ["Linux", "Hyprland", "Neovim", "Lua", "Shell", "Python"],
        githubUrl: "https://github.com/faizan-20/.dotfiles",
    }
];

function ProjectsPage() {
    return (
        <>
            <PageMetadata 
                title="Projects"
                description="A collection of my recent work and personal projects"
            />
            <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16" id="projects">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-rosepine-pine mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-lg md:text-xl text-rosepine-text/80 max-w-3xl mx-auto">
                            A collection of my recent work, showcasing my expertise in full-stack development
                            and passion for creating impactful solutions.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-rosepine-surface border border-rosepine-overlay rounded-lg overflow-hidden hover:border-rosepine-pine transition-all duration-300"
                            >
                                {/* Project Image */}
                                <div className="aspect-video bg-rosepine-overlay relative overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-rosepine-text/40">
                                            <svg
                                                className="w-16 h-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1}
                                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-rosepine-text mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-rosepine-text/60 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs rounded-full bg-rosepine-pine/10 text-rosepine-pine"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex items-center gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-rosepine-text/60 hover:text-rosepine-pine transition-colors"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                <span>View Code</span>
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-rosepine-text/60 hover:text-rosepine-pine transition-colors"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <h3 className="text-2xl font-semibold text-rosepine-text mb-4">
                            Want to See More?
                        </h3>
                        <p className="text-rosepine-text/60 mb-8">
                            Check out my GitHub profile for more projects and contributions
                        </p>
                        <a
                            href="https://github.com/faizan-20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-rosepine-pine text-white hover:bg-rosepine-pine/90 transition-colors"
                        >
                            View GitHub Profile
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default ProjectsPage; 