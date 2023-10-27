import './style.css'
import React, { useState, useEffect } from 'react';


export function Background(){
    function MousePosition() {
        const [position, setPosition] = useState({ mouseX: 0, mouseY: 0 });
      
        useEffect(() => {
          const handleMouseMove = (event) => {
            setPosition({
              mouseX: event.clientX,
              mouseY: event.clientY
            });
          };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          // Limpeza na desmontagem
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
        }, []); // Array vazio para executar apenas na montagem e desmontagem
        return (position)
    }
    const position = MousePosition();

    return (
        <div className='background'>
            <div className='mouse-focus' style={{background:`radial-gradient(500px at ${position.mouseX}px ${position.mouseY}px, var(--background), transparent 90%)`}}>
            </div>
        </div>
    )
}