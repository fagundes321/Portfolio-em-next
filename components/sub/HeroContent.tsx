import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <motion.div 
    initial = "hidden"
    animete = "visible"
    className = 'flex flex-row items-center justify-center px-20 mt-40 w-ful z-[20]'
    >
        <div className = 'h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            className = 'welcome-bos py-[15px] px-[15px] boder border-[]'
            >

            </motion.div>
        </div>
    </motion.div>
  );
}

export default HeroContent;
