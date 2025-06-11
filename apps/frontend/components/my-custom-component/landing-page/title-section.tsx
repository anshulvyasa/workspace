import React from "react";

interface TitleSectionProps {
    title: string;
    subtitle?: string;
    pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, pill }) => {
    return <React.Fragment>
        <section className="flex flex-col justify-center items-start gap-4 md:items-center">
            <article className="rounded-full p-[0.7px] text-sm dark:bg-gradient-to-r dark:from-chart-2 dark:to-ring ">
                <div className="rounded-full px-3 py-1 dark:bg-black">
                    {pill}
                </div>
            </article>
            {
                subtitle ? <>
                    <h1 className="text-left text-3xl sm:text-xl sm:max-w-[750px] md:text-center font-semibold">{title}</h1>
                    <p className="dark:text-chart-2 sm:max-w-[450px] md:text-center">{subtitle}</p>
                </> : <h1 className="text-left text-3xl sm:text-4xl lg:text-[42px] sm:max-w-[850px] md:text-center font-semibold">{title}</h1>
            }
        </section>
    </React.Fragment>
}

export default TitleSection;