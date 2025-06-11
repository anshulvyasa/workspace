import TitleSection from "@/components/my-custom-component/landing-page/title-section";
import React from "react";

const HomePage = () => {
    return (
        <section className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center  md:items-center">
            <div className="flex flex-row gap-2 max-w-[85vw] items-start border ">
                <div className="md:mt-9 lg:mt-28">
                    <TitleSection pill="✨ Yours Workspaces, Perfected" title="All-In-One Collaboration And Productivity Platform" />
                </div>
                <div className="hidden  md:block">
                    <img
                        src="landingpage.png"
                        alt="landing page image"
                        className="h-full w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomePage;