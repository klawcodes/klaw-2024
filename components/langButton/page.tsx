"use client";

import React, { CSSProperties } from "react";
import { useState, useEffect, useTransition } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";

const LangButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useMotionValue(0);
  const delayedScrollPosition = useSpring(scrollPosition, {
    damping: 20,
    stiffness: 200,
  });

  const languageOptions = [
    { label: '🇬🇧 English', value: 'en' },
    { label: '🇮🇩 Bahasa', value: 'id' },
    { label: '🇫🇷 Français', value: 'fr' },
    { label: '🇪🇸 Español', value: 'es' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      scrollPosition.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

const [isPending, startTransition] = useTransition();
const router = useRouter();

const changeLanguage = (option: { label: string; value: string }) => {
  if (option !== selectedLanguage) {
    startTransition(() => {
      sessionStorage.setItem('selectedLanguage', JSON.stringify(option));
      router.push(`/${option.value}`);
    });
    setIsOpen(false);
    setSelectedLanguage(option);
  }
};

useEffect(() => {
  const savedLanguage = sessionStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    setSelectedLanguage(JSON.parse(savedLanguage));
  }
}, []);


const buttonLabel = languageOptions.find(option => option.value === selectedLanguage.value)?.label;

  

  return (
    <motion.div
      className="w-40"
      style={{ y: delayedScrollPosition }}
    >
      <div className="relative h-8 w-full rounded-full bg-slate-800">
        <button
          className="w-53 cream absolute -left-1 -top-1 flex h-full w-full items-center justify-center gap-3 rounded-full border border-slate-800 bg-[#2d3250] p-2 text-xs transition-all duration-200 hover:-left-0 hover:-top-0 hover:bg-[#566097] lg:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLanguage.label}
        </button>
        {isOpen && (
          <div>
            <motion.div
            key={languageOptions[0].value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 bottom-[3rem] right-0 h-8 w-36"
            >
              <div
                className="border-slate-800 bg-[#2d3250] rounded-full shadow-lg p-2 text-center cursor-pointer hover:bg-[#566097]"
                onClick={() => {
                  changeLanguage(languageOptions[0]);
                }}
              >
                <h1 className="cream">{languageOptions[0].label}</h1>
              </div>
            </motion.div>
            
            <motion.div
            key={languageOptions[1].value}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 bottom-[5.7rem] right-0 h-8 w-36"
            >
              <div
                className="border-slate-800 bg-[#2d3250] rounded-full shadow-lg p-2 text-center cursor-pointer hover:bg-[#566097]"
                onClick={() => {
                  changeLanguage(languageOptions[1]);
                }}
              >
               <h1 className="cream">{languageOptions[1].label}</h1>
              </div>
            </motion.div>
            <motion.div
            key={languageOptions[2].value}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 bottom-[8.4rem] right-0 h-8 w-36"
            >
              <div
                className="border-slate-800 bg-[#2d3250] rounded-full shadow-lg p-2 text-center cursor-pointer hover:bg-[#566097]"
                onClick={() => {
                  changeLanguage(languageOptions[2]);
                }}
              >
                <h1 className="cream">{languageOptions[2].label}</h1>
              </div>
            </motion.div>
            <motion.div
            key={languageOptions[3].value}
              initial={{ opacity: 0, y: 140 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 bottom-[11.1rem] right-0 h-8 w-36"
            >
              <div
                className="border-slate-800 bg-[#2d3250] rounded-full shadow-lg p-2 text-center cursor-pointer hover:bg-[#566097]"
                onClick={() => {
                  changeLanguage(languageOptions[3]);
                }}
              >
                <h1 className="cream">{languageOptions[3].label}</h1>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LangButton;
