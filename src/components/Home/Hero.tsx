import { useEffect, useState } from "react";

function Hero() {
  // State to trigger the page load animation
  const [loaded, setLoaded] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setLoaded(true); // Trigger animation when the component is mounted
  }, []);

  return (
    <div
      className={`h-[92vh] flex flex-col justify-center items-center transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`font-rubik font-extrabold text-4xl transform transition-transform duration-1000 ${
          loaded ? "translate-y-0" : "-translate-y-10"
        }`}
      >
        <div>
          Hello, I Am <span className="text-rosepine-pine">Faizan Ahmad</span>.
        </div>
        <div className="text-rosepine-subtle text-3xl font-normal">
          Full Stack Web Developer
        </div>
      </div>

      <div className="flex gap-80 text-xl font-bold text-rosepine-iris/30 mt-44">
        {[
          { key: "Who Is Me", value: "who-is-me" },
          { key: "What I Do", value: "what-i-do" },
          { key: "Why Me", value: "why-me" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-transform duration-300 hover:translate-y-2 hover:text-rosepine-iris/80 p-4"
            onClick={() => scrollToSection(item.value)}
          >
            {item.key}
            {/* Down arrow appears on hover */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
