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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div
        className={`container mx-auto px-4 py-16 relative z-10 text-white text-center transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <img src={"/logo.png"} width={200} height={200} />
          </div>

          {/* Heading */}
          <div className="text-4xl md:text-6xl font-bold mb-14">
            <span className="text-emerald-500">Sustainable</span> News Africa
            <p className="text-sm mt-4 ">
              {" "}
              Telling Africa&apos;s Sustainability Stories
            </p>
          </div>
          <div className="h-0.5 w-24 bg-emerald-500 mx-auto my-8"></div>

          <p className="text-xl md:text-2xl mb-6">
            Our platform is <span className="text-emerald-500">launching soon</span>
          </p>

          <p className=" mb-12 max-w-xl mx-auto">
            We&apos;re building Africa&apos;s most trusted sustainability media
            and insights hub, where stories, data, and voices converge for a
            greener, more resilient continent.
          </p>
          <div className="h-0.5 w-24 bg-emerald-500 mx-auto my-8"></div>

          {/* Newsletter Signup */}
          <div className="mb-10">
            <h3 className=" mb-3">
              Be the first to know when we go live. Join us in spotlighting
              African-led sustainability solutions, innovations, and ideas.
            </h3>
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-sm bg-black bg-opacity-40 backdrop-blur-sm">
        <p>
          &copy; {new Date().getFullYear()} Sustainable News Africa. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
