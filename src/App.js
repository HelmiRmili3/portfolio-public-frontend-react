import React, { useEffect, useState } from "react"; // Add useState
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "./features/portfolio/portfolioSlice";
import {
  selectHeaderData,
  selectHeroData,
  selectAboutData,
  selectSkillsData,
  selectExperienceData,
  selectWorkData,
  selectTestimonialsData,
  selectContactData,
  selectFooterData,
} from "./features/portfolio/portfolioSlice";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false); // State for dark/light mode

  // Correctly access the `portfolio` slice
  const { loading, error } = useSelector((state) => state.portfolio);

  // Use selectors to extract specific data
  const headerData = useSelector(selectHeaderData);
  const heroData = useSelector(selectHeroData);
  const aboutData = useSelector(selectAboutData);
  const skillsData = useSelector(selectSkillsData);
  const experienceData = useSelector(selectExperienceData);
  const workData = useSelector(selectWorkData);
  const testimonialsData = useSelector(selectTestimonialsData);
  const contactData = useSelector(selectContactData);
  const footerData = useSelector(selectFooterData);

  // Fetch portfolio data on component mount
  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={darkMode ? "dark" : ""}>
      {" "}
      {/* Apply dark mode class */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header
          data={headerData}
          darkMode={darkMode} // Pass dark mode state
          toggleDarkMode={toggleDarkMode} // Pass toggle function
        />
        <Hero data={heroData} />
        <About data={aboutData} />
        <Skills data={skillsData} />
        <Experience data={experienceData} />
        <Work data={workData} />
        <Testimonials data={testimonialsData} />
        <Contact data={contactData} />
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default App;
