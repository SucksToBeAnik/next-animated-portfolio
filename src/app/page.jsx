import Image from "next/image";
import PageTransitionProvider from "@/components/pageTransitionProvider";

const Homepage = () => {
  return (
    <PageTransitionProvider>
    <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image container */}
      <div className="h-[75vh] w-1/2 lg:h-100vh relative self-center">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* Image container */}

      {/* Text Container */}
      <div className=" lg:h-100vh lg:w-1/2 flex flex-col gap-8 justify-center self-center items-start p-2">
        <h1 className="text-4xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugiat nisi quasi expedita placeat esse eaque nam laboriosam eligendi
          fugit.
        </p>
        <div className="flex gap-4 justify-between w-full sm:w-auto">
          <button className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-2 md:p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
      {/* Text Container */}
    </div>
    </PageTransitionProvider>
  );
};

export default Homepage;
