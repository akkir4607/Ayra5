// src/components/IOSCursor.jsx
import React, { useState, useEffect } from 'react';

const IOSCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.type === 'button' ||
        target.type === 'submit' ||
        target.role === 'button' ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'all 0.15s ease-out',
    opacity: isVisible ? 1 : 0,
    transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${
      isClicking ? 0.8 : isHovering ? 1.5 : 1
    })`
  };

  const dotStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    transition: 'all 0.15s ease-out',
    backdropFilter: 'blur(1px)',
    backgroundColor: isHovering 
      ? 'rgba(59, 130, 246, 0.3)' 
      : 'rgba(75, 85, 99, 0.8)',
    border: isHovering ? '2px solid rgb(59, 130, 246)' : 'none'
  };

  return (
    <div style={cursorStyle}>
      <div style={dotStyle} />
    </div>
  );
};

export default IOSCursor;