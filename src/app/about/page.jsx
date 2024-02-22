import PageTransitionProvider from "@/components/pageTransitionProvider";

function AboutPage() {
  const skillList = ["HTML", "CSS", "Javascript", "Python", "SQL"];
  return (
    <PageTransitionProvider>
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex">
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              illo soluta, repudiandae in neque harum aspernatur corporis, vel
              tenetur, animi maxime nihil et. Adipisci soluta a ullam
              perspiciatis, et at?
            </p>

            <span className=" italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              deserunt.
            </span>

            <button className="p-2 border border-black rounded-full self-start">
              &darr;
            </button>
          </div>

          {/* SKILLS container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILL LIST</h1>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded bg-stone-900 text-zinc-50 cursor-pointer hover:bg-zinc-50 hover:text-stone-900 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* SVG container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2"></div>
      </div>
    </PageTransitionProvider>
  );
}

export default AboutPage;
