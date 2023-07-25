"use client"
import { useState, useEffect } from "react";
import FooterForNav from "../components/Navbars/FooterForNav";

const DesktopComponent = () => {
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      // Check the window width on initial mount
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768); // Set breakpoint for desktop view (adjust as needed)
      };
  
      // Add event listener to detect window resize
      window.addEventListener('resize', handleResize);
  
      // Call handleResize on initial mount
      handleResize();
  
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return isDesktop ? <div><FooterForNav/></div> : null;
  };
  
  export default DesktopComponent;