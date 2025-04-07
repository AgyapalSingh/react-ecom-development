import { useState, useEffect } from "react";

const AnnounceMentBar = () => {
  const messages = [
    "💖 Hello, Team",
    "🎉 Something new is coming soon",
    "🚀 Developer - Agyapal Singh",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="uniq-ag-announcement-bar">
      <p>{messages[currentIndex]}</p>
    </div>
  );
};

export default AnnounceMentBar;
