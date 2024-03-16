import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(prevText => {
        if (currentIndex === text.length) {
          clearInterval(interval);
          return prevText; // Typing complete
        } else {
          currentIndex++;
          return text.slice(0, currentIndex); // Add one character at a time
        }
      });
    }, 100); // Adjust typing speed (milliseconds)
    
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>{displayText}</span>
  );
};

export default Typewriter;