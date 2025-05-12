import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Strength {
  title: string;
  description: string;
  icon: JSX.Element;
}

const strengths: Strength[] = [
  {
    title: "Full Stack Expertise",
    description: "Proficient in both frontend and backend development, ensuring seamless integration and optimal performance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Problem Solver",
    description: "Analytical approach to complex challenges with a focus on scalable and maintainable solutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "User-Centric Design",
    description: "Focus on creating intuitive and engaging user experiences that drive business value",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Agile Mindset",
    description: "Adaptable to changing requirements with a focus on delivering value incrementally",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: "Faizan consistently delivers high-quality code and innovative solutions.",
    author: "Previous Client",
    role: "Project Manager"
  },
  {
    quote: "A reliable developer who goes above and beyond to ensure project success.",
    author: "Team Lead",
    role: "Tech Lead"
  }
];

function WhyMe() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16" id="why-me">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-rosepine-pine mb-6">
            Why Choose Me?
          </h2>
          <p className="text-lg md:text-xl text-rosepine-text/80 max-w-3xl mx-auto">
            I bring a unique combination of technical expertise, problem-solving skills, and
            a passion for creating impactful solutions that drive business growth.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-rosepine-surface border border-rosepine-overlay hover:border-rosepine-pine transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-rosepine-pine/10 text-rosepine-pine">
                  {strength.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rosepine-text mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-rosepine-text/60">
                    {strength.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-rosepine-surface/50 border border-rosepine-overlay"
            >
              <svg
                className="w-8 h-8 text-rosepine-pine/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-rosepine-text/80 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-rosepine-text">{testimonial.author}</p>
                <p className="text-sm text-rosepine-text/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold text-rosepine-text mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-rosepine-text/60 mb-8">
            Let's work together to bring your ideas to life
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-rosepine-pine text-white hover:bg-rosepine-pine/90 transition-colors"
          >
            Get in Touch
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default WhyMe;
