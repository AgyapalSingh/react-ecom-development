import React from "react";

const ScrollingText = () => {
  const texts = [
    "ABP Live CXO Daily Hunt Deccan Herald Femina",
    " | ",
    "Global Spa Happy Credit Health Site Her Zindagi High On Persona",
    " | ",
    "Hindustan Times IANS IDiva Influsser Lifestyyle",
    " | ",
    "Mens XP Mid Day News Nine Perfect Women Pink Villa",
    " | ",
  ];
  return (
    <div className="uniq-ag-marquee-container">
      <div className="uniq-ag-texts-marquee">
        <div className="uniq-ag-texts-marquee-content">
          {texts.concat(texts).map((text, index) => (
            <span key={index} className="uniq-texts-text">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
