import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
//import { BiMessageSquareDetail } from 'react-icons/bi';
import { GoCheck } from 'react-icons/go';
//import { BsBriefcaseFill } from 'react-icons/bs';
//import { ToggleSwitch } from '@primer/react'; // Import ToggleSwitch from @primer/react

import './topbar.css';

import { useTranslation } from 'react-i18next';
import CustomToggleSwitch from './CustomToggleSwitch';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const [isFrench, setIsFrench] = useState(true);

  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const newLanguage = isFrench ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
    setIsFrench(!isFrench);
  };
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#certification" onClick={() => setActiveNav('#certification')} className={activeNav === '#certification' ? 'active' : ''}><GoCheck /></a>
      {/* <a href="#professional-experience" onClick={() => setActiveNav('#professional-experience')} className={activeNav === '#professional-experience' ? 'active' : ''}><BsBriefcaseFill /></a> */}
      {/* <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a> */}
     
      <CustomToggleSwitch onChange={handleLanguageToggle} checked={isFrench} />
  
     
    </nav>
  );
};

export default Topbar;

