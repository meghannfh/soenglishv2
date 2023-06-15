import { useState } from 'react';

import Top from './sections/Top';
import Mission from './sections/Mission';
import MediaSection from './sections/MediaSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import StrategySection from'./sections/StrategySection';
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
    setShowQR(prevShowQR => !prevShowQR)
    console.log(showQR);
  };

  return (
    <div className='h-screen relative fixed-width-xlg-screens'>
      <Top />
        <div>
          <Mission />
          <MediaSection />
          <ServicesSection />
          <AboutSection />
        </div>
        <div>
          <div className="h-screen fixed-bg-section">
          </div>
          <StrategySection />
          <ContactSection handleContactClick={handleContactClick} />
          <FooterSection />
        </div>
        <ConsultingBanner handleBannerClick={handleBannerClick} />
        <QRCode showQR={showQR} />
    </div>
  );
}

export default App;
