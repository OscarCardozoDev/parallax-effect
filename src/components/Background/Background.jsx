import React, { useState, useEffect } from "react";
import bgLv2 from "../../images/2.png";
import bgLv3 from "../../images/3.png";
import bgLv4 from "../../images/4.png";
import luna from "../../images/luna.png";

import bg1 from "../../images2/1.png";
import bg2 from "../../images2/2.png";
import bg3 from "../../images2/3.png";
import bg4 from "../../images2/4.png";
import "./Background.css";

const SCALE_FACTOR_Y = 1.05; // Ajusta este valor para hacer las imágenes más grandes
const SCALE_FACTOR_X = 1.2; // Ajusta este valor para hacer las imágenes más grandes

const Background = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Función para actualizar dimensiones de la pantalla
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Función para el efecto parallax con el mouse
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; 
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setOffsetX(x);
      setOffsetY(y);
    };

    // Eventos de redimensionamiento y movimiento del mouse
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Dimensiones ampliadas para evitar espacios en blanco
  const scaledWidth = dimensions.width * SCALE_FACTOR_Y;
  const scaledHeight = dimensions.height * SCALE_FACTOR_X;
  const offsetXCorrection = (scaledWidth - dimensions.width) / 2;
  const offsetYCorrection = (scaledHeight - dimensions.height) / 2;

  return (
    <div className="parallax-container">
      {/*
      <svg 
        width="100%" 
        height="100vh"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} 
        xmlns="http://www.w3.org/2000/svg"
      >

        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(115,114,156,1)" />
            <stop offset="33%" stopColor="rgba(115,114,156,1)" />
            <stop offset="66%" stopColor="rgba(94,112,160,1)" />
            <stop offset="100%" stopColor="rgba(64,106,164,1)" />
          </linearGradient>
        </defs>


        <rect width="100%" height="100%" fill="url(#bgGradient)" />


        <image 
          href={luna} 
          x="50vw"
          y="25vh"
          width={dimensions.width * 0.15} 
          height={dimensions.height * 0.15} 
          style={{ transform: `translate(${offsetX * 0.25}px, ${offsetY * 0.25}px)` }} 
        />

        <image 
          href={bgLv2} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)` }} 
        />

        <image 
          href={bgLv3} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }} 
        />
        <image 
          href={bgLv4} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 1.5}px, ${offsetY * 1.5}px)` }} 
        />
      </svg>
      */}

      <svg 
        width="100%" 
        height="100vh"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} 
        xmlns="http://www.w3.org/2000/svg"
      >

        <image 
          href={bg1} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 0.25}px, ${offsetY * 0.25}px)` }} 
        />

        <image 
          href={bg2} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }} 
        />

        {/* Capa superior (más cercana, mayor movimiento) */}
        <image 
          href={bg3} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)` }} 
        />
        <image 
          href={bg4} 
          width={scaledWidth} 
          height={scaledHeight} 
          x={-offsetXCorrection}
          y={-offsetYCorrection}
          style={{ transform: `translate(${offsetX * 0.25}px, ${offsetY * 0.25}px)` }} 
        />
      </svg>
    </div>
  );
};

export default Background;