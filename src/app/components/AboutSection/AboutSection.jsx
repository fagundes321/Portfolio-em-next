"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Certifications from "./Certifications";
import Recommendations from "./Recommendations";
import Skills from "./Skills";
import TabButton from "./TabButton";

const sharedTransition = { duration: 0.3, ease: "easeInOut" };

const sobre_mim =
  "Sou um desenvolvedor full stack apaixonado por criar aplicações web interativas e responsivas. Tenho experiência com JavaScript, React, Next.js, Angular, Node.js, Docker, HTML, CSS e Git. Sou um aprendiz rápido e estou sempre buscando expandir meus conhecimentos e habilidades. Trabalho bem em equipe e estou animado para colaborar com outras pessoas na criação de aplicações incríveis.";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <Skills />,
  },
  {
    title: "Certificados",
    id: "certificados",
    content: <Certifications />,
  },
  {
    title: "Recomendações",
    id: "recomendacoes",
    content: <Recommendations />,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  useEffect(() => {
    AOS.init();
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = TAB_DATA.findIndex((t) => t.id === tab);
      const nextIndex = (currentIndex + 1) % TAB_DATA.length;
      setTab(TAB_DATA[nextIndex].id);
    },
    onSwipedRight: () => {
      const currentIndex = TAB_DATA.findIndex((t) => t.id === tab);
      const prevIndex = (currentIndex - 1 + TAB_DATA.length) % TAB_DATA.length;
      setTab(TAB_DATA[prevIndex].id);
    },
  });

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section
      className="text-white py-8 px-4 xl:px-16 sm:py-45  "
      id="sobre"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div
          className="flex justify-center mb-4 md:mb-0 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
        <div className="relative w-full max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] mx-auto mb-8 overflow-hidden rounded-full ">
            <svg
              className="about__blob"
              viewBox="0 0 600 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Círculo com borda */}
              <circle
                cx="260"
                cy="300"
                r="200"
                fill="none"
                stroke="#7CF03D"
                strokeWidth="3"
              />
              {/* Imagem vazando apenas na parte de cima e centralizada */}
              <image
                href="/images/hero-image3.png"
                x="-10"
                y="12"
                width="550"
                height="550"
                style={{ clipPath: "circle(38% at 49% 50%)" }} // Forma circular
              />
            </svg>
          </div>
        </div>

        <div
          className="text-left flex flex-col h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          {...handlers}
        >
          <h1 className="text-[#7cf03d] mb-4 text-3xl sm:text-4xl lg:text-5xl gap-2 font-bold whitespace-nowrap flex flex-col sm:flex-row sm:items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#5CBF2A] via-[#7CF03D] to-[#2E6B1A]">
            &lt;Sobre/&gt;
            </span>
          </h1>
          <p className="text-base lg:text-lg text-justify">{sobre_mim}</p>
          <br />
          <div className="flex flex-wrap justify-start gap-0 sm:gap-1 mt-3 sm:mt-4 sm:mb-0 mb-1 sm:m-0 -m-1 text-[14px] sm:text-[19px]">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                <span className="text-center w-full block ">{title}</span>
              </TabButton>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={sharedTransition}
              className="mt-8"
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
