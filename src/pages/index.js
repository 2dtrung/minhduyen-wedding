import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { aboutObj, discoverObj, signupObj } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Memories from '../components/Memories';
import CelebrateOurLove from '../components/CelebrateOurLove';
import ConfirmForm from '../components/ConfirmForm';
import SweetMoment from '../components/SweetMoment';
import WeddingInformation from '../components/WeddingInformation';
import FooterCustom from '../components/FooterCustom';
import About from '../components/About';
import '../fonts/animation.scss'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CoverSection />
      <About />
      <Memories />
      <CelebrateOurLove />
      <ConfirmForm />
      <SweetMoment />
      <WeddingInformation />
      <FooterCustom />
    </>
  );
};

export default Home;
