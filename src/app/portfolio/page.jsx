"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import Project from "@/components/project";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "WatchHUB",
      image: "/watch_hub.png",
      liveLink: "https://watch-hub.netlify.app/",
      codeLink: "https://github.com/SucksToBeAnik/movie-hub-REACT",
    },
    {
      id: 2,
      title: "Markdown BLOG",
      image: "/markdown_blog.png",
      liveLink: "https://md-blog-basic.netlify.app/",
      codeLink: "https://github.com/SucksToBeAnik/markdown-blog-REACT",
    },
    {
      id: 3,
      title: "React PIZZA",
      image: "/react_pizza.png",
      liveLink: "https://fast-react-pizza-theta-rouge.vercel.app/",
      codeLink: "https://github.com/SucksToBeAnik/fast-react-pizza-REACT",
    },
    {
      id: 4,
      title: "Blog API",
      image: "/blog_api.png",
      liveLink: "",
      codeLink: "https://github.com/SucksToBeAnik/blog-api-FASTAPI",
    },
    {
      id: 5,
      title: "Todo API",
      image: "/blog_api.png",
      liveLink: "",
      codeLink: "https://github.com/SucksToBeAnik/todo-api-FASTAPI",
    },
    {
      id: 6,
      title: "Travel with Tailwind",
      image: "/travel_tailwind.png",
      liveLink: "https://travelwithtailwind.netlify.app/",
      codeLink: "https://github.com/SucksToBeAnik/travel-landing-page-TAILWIND",
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(ref);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  return (
    <PageTransitionProvider>
      <div className="h-[calc(800vh-6rem)] relative" ref={ref}>
        <div className="min-h-screen min-w-screen flex items-center justify-center text-4xl md:text-5xl lg:text-8xl text-center text-stone-900 tracking-wider ">
          MY PROJECTS
        </div>

        <div className="flex h-screen sticky top-0 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen bg-gradient-to-b from-red-100 to-blue-100"></div>

            {projects.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </motion.div>
        </div>
      </div>
      {/* <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center">
          Want to work on a project with me?
        </h1>
      </div> */}
    </PageTransitionProvider>
  );
}

export default PortfolioPage;
