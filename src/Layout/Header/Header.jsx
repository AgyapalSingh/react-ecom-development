import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import NavBar from "./NavBar";
import AnnounceMentBar from "./AnnounceMentBar";

const Header = () => {
  const announceRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 20) {
        gsap.to(announceRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(navRef.current, {
          y: "-35px",
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        });
      } else if (currentScroll <= 20) {
        gsap.to(announceRef.current, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(navRef.current, {
          y: "0px",
          duration: 0.4,
          ease: "power2.out",
          boxShadow: "none",
        });
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="uniq-ag-header">
      <div ref={announceRef}>
        <AnnounceMentBar />
      </div>
      <div ref={navRef}>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
