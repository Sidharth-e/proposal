import React, { useRef, useEffect } from 'react';

const FloatingButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => {
      const noBtn = buttonRef.current;
      if (noBtn) {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
      }
    };

    const noBtn = buttonRef.current;
    if (noBtn) {
      noBtn.addEventListener('mouseover', handleMouseOver);

      return () => {
        noBtn.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className='no-btn'
    >
      No
    </button>
  );
};

export default FloatingButton;
