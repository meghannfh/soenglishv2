import { useState } from 'react';

import Top from './sections/Top';
import Mission from './sections/Mission';
import MediaSection from './sections/MediaSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import StrategySection from'./sections/StrategySection';
import SoRainbowSection from './sections/SoRainbowSection';
import PriceAndSignupSection from './sections/PriceAndSignupSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

import ConsultingBanner from './components/standalone/ConsultingBanner';
import QRCode from './components/standalone/QRCode';

function App() {
  const [showQR, setShowQR] = useState(false);

  const handleBannerClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
  }

  
  const handleContactClick = () => {
    setShowQR(prevShowQR => prevShowQR = true)
  };

  const handleCloseQRClick = () => {
    setShowQR(prevShowQR => prevShowQR = false)
  }

  return (
    <div className='h-screen relative fixed-width-xlg-screens'>
      <Top />
        <div>
          <Mission />
          <MediaSection />
          <ServicesSection />
          <StrategySection />
        </div>
        <div>
          <div className="h-screen fixed-bg-section">
          </div>
          <AboutSection />
          <SoRainbowSection />
          <PriceAndSignupSection />
          <ContactSection handleContactClick={handleContactClick} />
          <FooterSection />
        </div>
        <div className='fixed right-0 bottom-0 z-30'>
          <ConsultingBanner handleBannerClick={handleBannerClick} />
        </div>
    </div>
  );
}

export default App;
