import React, { useState } from 'react';
import './HoverableParagraph.css';

const HoverableParagraph = () => {
  const [hoveredWord, setHoveredWord] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

  // Define the hover information for each section of the paragraph
  const hoverInfo = {
    '4th/5th year': 'Transferring is complicated',
    'software engineer': 'Or maybe a "developer"? Ooh, or an "analyst"',
    'VR/AR': "I'm a proud owner of a Valve Index",
    'AI/ML': 'Shocker, right?',
    'Bay Area': 'Go Warriors!',
    'Portland': 'Go Blazers, I GUESS'
  };

  const handleMouseOver = (event, word) => {
    if (hoverInfo[word]) {
      setHoveredWord(word);
      setShowInfo(true);
      const rect = event.target.getBoundingClientRect();
      setHoverPosition({ top: rect.top + window.scrollY, left: rect.left + window.scrollX + rect.width });
    }
  };

  const handleMouseOut = () => {
    setShowInfo(false);
  };


  const text = [
    { phrase: "I'm a ", normal: true },
    { phrase: "4th/5th year", normal: false },
    { phrase: " student at UCR, aiming to become a " , normal: true },
    {phrase: "software engineer", normal:false},
    {phrase:". Recently, beyond what I already mentioned, I've been interested in ", normal:true},
    { phrase: "VR/AR", normal: false },
    { phrase: ", and ", normal: true },
    { phrase: "AI/ML", normal: false },
    { phrase: ". I'm originally from the ", normal:true},
    { phrase: "Bay Area", normal:false},
    { phrase: ", but I've recently relocated up to ", normal: true },
    { phrase: "Portland", normal:false}
  ];

  const paragraph = text.map((segment, index) => (
    segment.normal
      ? segment.phrase
      : <span
          key={index}
          className="hoverable-word"
          onMouseOver={(e) => handleMouseOver(e, segment.phrase)}
          onMouseOut={handleMouseOut}
        >
          {segment.phrase}
        </span>
  ));

  return (
    <div>
      <p id="paragraph">
        {paragraph}
      </p>
      <div
        id="hover-info"
        className={showInfo ? 'show' : ''}
        style={{ top: hoverPosition.top, left: hoverPosition.left }}
      >
        <p>{hoverInfo[hoveredWord]}</p>
        <img
              alt="pixel art of me!"
              src="https://i.imgur.com/hqPvhua.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
      </div>
      
    </div>
  );
};

export default HoverableParagraph;
