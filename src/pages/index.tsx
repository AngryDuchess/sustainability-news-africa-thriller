import { useState, useEffect } from "react";
import NewsletterForm from "@/components/NewsletterForm";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, #1A1F2C, #221F26)",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div
        className={`container mx-auto px-4 py-16 relative z-10 text-white text-center transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex md:items-center justify-center gap-2 mb-4">
            <div className=" ">

            <img className="object-cover w-[100px] h-[100px]" src={"/favicon.png"}  />
            </div>
            <div className="flex flex-col items-start">
              
            <h1 className="text-3xl md:text-4xl text-left font-bold">Sustainability News Africa</h1>
            <p className="text-sm mt-2 font-medium ">
              {" "}
              Telling Africa&apos;s Sustainability Stories
            </p>
            </div>
          </div>
          <div className="h-0.5 w-24 bg-emerald-500 mx-auto my-8"></div>
          <p className="text-xl md:text-2xl mb-3">
            Our platform is{" "}
            <span className="text-emerald-500">launching soon</span>
          </p>
          <p className="mb-12 max-w-xl mx-auto text-sm md:text-base">
            We are building Africa's most trusted sustainability media and
            insights hub, where uncovered stories, consolidated data, solutions
            and authentic voices converge to showcase and amplify a greener and
            more resilient continent.
          </p>
          <div className="h-0.5 w-24 bg-emerald-500 mx-auto my-8"></div>{" "}
          <div className="mb-10">
            <p className=" mb-3 text-sm md:text-base">
              Be the first to know when we go live. Join us in spotlighting
              African-led sustainability solutions, innovations, and ideas.
            </p>
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-xs bg-black bg-opacity-40 backdrop-blur-sm">
        <p>
          &copy; {new Date().getFullYear()} Sustainability News Africa. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
