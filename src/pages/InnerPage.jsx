import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CtaButton from "../components/CtaButton";
import InnerpageSocial from "../components/InnerpageSocial";
import PopupForm from "../components/PopupForm";
import RiskAdvisor from "../components/RiskAdvisor";
import KeyFeature from "../components/KeyFeature";
import Sidebar from "../components/Sidebar";
import TradeDigi from "../components/TradeDigi";
import Testimonials from "../components/Testimonials";
import "./Innerpage.css";
import NotFound from "./NotFound";
import Team from "../components/Team";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
const data = {
  quantum: {
    title: "Trade Confidently with Quantum Code Ai",
    image: "/img/quantum-banner.jpeg",
    buttonText: "Start Trading Digital Assets",
    sidebarText: "Open Your Free Quantum Code Ai Account",
    metaTitle: "Quantum Code AI Review | Trade Confidently",
    metaDescription:
      "Discover how Quantum Code AI can enhance your trading experience and maximize your profits.",
  },
  activtrades: {
    title: "Maximize Your Trading Potential with ActivTrades",
    image: "/img/activtrades-banner.jpg",
    buttonText: "Start Trading with ActivTrades",
    sidebarText: "Open Your Free ActivTrades Account",
    metaTitle: "ActivTrades Review | Maximize Your Trading Potential",
    metaDescription:
      "Learn about ActivTrades' features, benefits, and how it can help you succeed in trading.",
  },
  ava: {
    title: "Maximize Your Trading Potential with Ava",
    image: "/img/ava-banner.jpg",
    buttonText: "Start Trading with Ava",
    sidebarText: "Open Your Free Ava Account",
    metaTitle: "Ava Review | Unlock Your Trading Potential",
    metaDescription:
      "Explore Ava's trading services and tools designed to enhance your trading journey.",
  },
  plus500: {
    title: "Maximize Your Trading Potential with plus500",
    image: "/img/other.jpg",
    buttonText: "Start Trading with plus500",
    sidebarText: "Open Your Free plus500 Account",
    metaTitle: "plus500 Review | Unlock Your Trading Potential",
    metaDescription:
      "Explore plus500's trading services and tools designed to enhance your trading journey.",
  },
  capital: {
    title: "Maximize Your Trading Potential with capital",
    image: "/img/other.jpg",
    buttonText: "Start Trading with capital",
    sidebarText: "Open Your Free capital Account",
    metaTitle: "capital Review | Unlock Your Trading Potential",
    metaDescription:
      "Explore capital's trading services and tools designed to enhance your trading journey.",
  },
  default: {
    title: "Welcome to Our Trading Platform",
    image: "/img/other.jpg",
    buttonText: "Explore Our Services",
    sidebarText: "Open Your Account Today!",
    metaTitle: "Welcome to Our Trading Platform",
    metaDescription:
      "Join our trading platform to discover powerful tools and resources for successful trading.",
  },
};

const Innerpage = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").pop(); // Get the last segment of the path
  //  const content = data[pathName] || data.default; // Get content based on the path or use default
  const content = data[pathName]; // Get content based on the path

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the width as needed
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if content exists; if not, render NotFound component
  if (!content) {
    return <NotFound />;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{content.metaTitle}</title>
          <meta name="description" content={content.metaDescription} />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="hero-section__title">{content.title}</h1>
              <InnerpageSocial />
              <div className="hero-section__image">
                <img className="img-fluid" src={content.image} alt="" />
              </div>
              {isMobile ? (
                <Sidebar
                  headingText={content.sidebarText}
                  withoutsticky="withoutsticky"
                />
              ) : (
                <CtaButton buttonText="Open Your Free account" />
              )}
              <KeyFeature />
              <CtaButton buttonText="Explore Digital Assets Market" />
              <TradeDigi />
              <CtaButton buttonText="Start Trading Digital Assets" />
            </div>

            <div className="col-md-4">
              {!isMobile && <Sidebar headingText={content.sidebarText} />}
            </div>
          </div>

          <PopupForm modalTitle={pathName} />
        </div>
        <Benefits />
        <Testimonials />
        <FAQ />
        <Team />
        {/* <div className="container">
          <RiskAdvisor />
        </div> */}
      </HelmetProvider>
    </>
  );
};
export default Innerpage;
