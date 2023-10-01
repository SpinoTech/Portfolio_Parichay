import React, { useState, useEffect } from 'react';

const Typewriter = ({ text ,tag }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 1); // Adjust the speed of typing by changing the timeout duration
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

   // Handle new lines
   useEffect(() => {
    if (text[currentIndex] === '/') {
      setDisplayText(prevText => prevText + '\n');
    }
  }, [currentIndex, text]);

  if(tag==='p')return <p>{displayText}</p>; 
  if(tag==='h1')return <h1>{displayText}</h1>;
  
};

export default Typewriter;
