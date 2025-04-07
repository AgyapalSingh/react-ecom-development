import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AnnounceMentBar = () => {
  const messages = [
    "💖 Hello, Team",
    "🎉 Something new is coming soon",
    "🚀 Developer - Agyapal Singh",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const messageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(messageRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      messageRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [currentIndex]);

  return (
    <div className="uniq-ag-announcement-bar">
      <div className="uniq-ag-animation-container">
        <p ref={messageRef} style={{ margin: 0 }}>
          {messages[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default AnnounceMentBar;
