import Clients from "@/components/my-custom-component/landing-page/clients";
import Feature from "@/components/my-custom-component/landing-page/feature";
import Footer from "@/components/my-custom-component/landing-page/footer";
import Header from "@/components/my-custom-component/landing-page/header";
import Hero from "@/components/my-custom-component/landing-page/hero";
import Pricing from "@/components/my-custom-component/landing-page/pricing";
import Testomonial from "@/components/my-custom-component/landing-page/testominials";
import React from "react";

const HomePage = () => {
  console.log("goole auth",process.env.AUTH_GOOGLE_ID)
  console.log("google secret : ", process.env.AUTH_GOOGLE_SECRET)
  return (
    <main>
      <Header/>
      <Hero />
      <Clients />
      <Feature />
      <Testomonial />
      <Pricing />
      <Footer/>
    </main>
  );
};

export default HomePage;
