import React from "react";
import Navbar from "./component/Navbar";
import Intro from "./component/Intro";
import Skilled from "./component/Skilled";
import Project from "./component/Project";
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import SocialIcon from "./component/SocialIcon";
import Footer from "./component/Footer";
import { useState, useEffect } from "react";
import Hashloader from "react-spinners/Hashloader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    < >
      {loading ? (
        <div className="flex justify-center h-full w-full items-center mt-[70%] sm:mt-[40%] md:mt-[30%] lg:mt-[20%]">

        <Hashloader
         
         color={"#e30b2c"}
         loading={loading}
         size={50}
         aria-label="Loading Spinner"
         data-testid="loader"
         />
         </div>
      ) : (
        <div>
          <Navbar />
          <Intro />
          <Skilled />
          <Project />
          <Clients />
          <Contact />
          <SocialIcon />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
