"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative animate__animated animate__slow animate__fadeInRight">
      <motion.div>
        {/* Container da imagem centralizado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[490px] xl:h-[490px] rounded-full overflow-hidden mix-blend-lighten">
          <Image
            src="/images/hero-image.jpg"
            alt="Minha foto"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-45%] object-contain"
            width={500}
            height={500}
            priority
          />
        </div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
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
            r="250"
            stroke="url(#gradient)"
            strokeWidth="3"
            strockeLinecap="round"
            strockeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 12 25 25", "16 25 92 72", "4 250 22 22"],
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
