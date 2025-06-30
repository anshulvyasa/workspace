import BackGroundDesign from "@/components/background-design/background-design";
import Navigation from "@/components/home-page/navigation";
import ThemeToggle from "@/components/my-custom-component/landing-page/theme-toggle";
import React from "react";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className="hidden md:block absolute bottom-4 right-2 md:bottom-8 md:right-4 z-[10000]"
      >
        <ThemeToggle />
      </div>
      <div className="h-screen w-screen flex overflow-hidden">
        <BackGroundDesign />
        <Navigation /> {/* this should be flex-item with resizable width */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </>
  );
};

export default HomePageLayout;
