"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, BanknoteArrowDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router=useRouter();
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* background effect   */}
      <BackgroundEffect />

      <div className="z-10 container mx-auto px-4  mt-32 md:mt-42 lg:mt-44 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-8 animate-fade-in">
          ✨ Your Workspaces, Perfected
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          {" "}
          All-In-One <span className="gradient-text">Collaboration</span>
          <br />
          And Productivity Platform
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Transform your team's productivity with our powerful workspace
          platform. Create, collaborate, and achieve more together.
        </p>

        <div className="flex items-center justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6" onClick={()=>router.push('/signin')}>
            Get Started <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </div>

        <HeroImage />
 
        {/* Scroll Indicator  */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

const BackgroundEffect = () => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </React.Fragment>
  );
};

const HeroImage = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="relative">
        <img
          src="banner.jpeg"
          alt="WorkSpaces"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Hero;
