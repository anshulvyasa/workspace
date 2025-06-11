import React from "react";
import HomePage from "./page";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default HomePageLayout;