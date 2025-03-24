"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const [circleSize, setCircleSize] = useState(250);
  const [dashArray, setDashArray] = useState("24 10 0 0");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setCircleSize(258); // Tamanho menor para mobile
        setDashArray("8 10 15 15"); // Ajustando o dash para telas menores
      } else {
        setCircleSize(250); // Tamanho normal para desktop
        setDashArray("15 12 25 25");
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full h-full relative mt-16 bg"> {/* Adicionando uma margem superior */}
      <motion.div>
        {/* Container da imagem centralizado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[490px] xl:h-[490px] rounded-full overflow-hidden mix-blend-lighten">
          <Image
            src="/images/hero-image.jpg"
            alt="Minha foto"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-45%] object-contain"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* SVG de borda */}
        <motion.svg
          className="w-[250px] sm:w-[300px] xl:w-[506px] h-[250px] sm:h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5CBF2A" />
              <stop offset="50%" stopColor="#7CF03D" />
              <stop offset="100%" stopColor="#2E6B1A" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="253"
            cy="253"
            r={circleSize}
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: dashArray }}
            animate={{
              strokeDasharray: [dashArray, "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
