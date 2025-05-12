import Hero from "@/components/Home/Hero";
import WhatIDo from "@/components/Home/WhatIDo";
import WhoIsMe from "@/components/Home/WhoIsMe";
import WhyMe from "@/components/Home/WhyMe";
import PageMetadata from "@/components/PageMetadata";

function Home() {
  return (
    <>
      <PageMetadata 
        title="Home"
        description="Full Stack Developer specializing in modern web applications"
      />
      <Hero />
      <WhoIsMe />
      <WhatIDo />
      <WhyMe />
    </>
  );
}

export default Home;
