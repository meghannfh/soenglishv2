import { useState } from 'react';

import Top from './sections/Top'
import Mission from './sections/Mission'
import MediaSection from './sections/MediaSection';
import AboutSection from './sections/AboutSection';
import MethodSection from'./sections/MethodSection';
import KansouSection from './sections/KansouSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

import ConsultingBanner from './components/standalone/ConsultingBanner';
import LineQR from './components/standalone/LineQR';

function App() {
  const [showQR, setShowQR] = useState(false)

  const handleShowQR = () => {
    setShowQR(prevShowQR => !prevShowQR)
  }


  return (
    <div className='h-screen relative fixed-width-xlg-screens'>
      <Top />
        <div>
          <Mission />
          <MediaSection />
          <AboutSection />
        </div>
        <div>
          <div className="h-screen fixed-bg-section">
          </div>
          <MethodSection />
          <KansouSection />
          <ContactSection />
          <FooterSection />
        </div>
        <ConsultingBanner handleShowQR={handleShowQR} showQR={showQR} />
        <LineQR />
    </div>
  );
}

export default App;
