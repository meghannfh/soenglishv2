import Top from './sections/Top'
import Mission from './sections/Mission'
import MediaSection from './sections/MediaSection';
import AboutSection from './sections/AboutSection';
import StrategySection from'./sections/StrategySection';
import KansouSection from './sections/KansouSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

import ConsultingBanner from './components/standalone/ConsultingBanner';

function App() {

  const handleBannerClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
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
          <StrategySection />
          <KansouSection />
          <ContactSection />
          <FooterSection />
        </div>
        <ConsultingBanner handleBannerClick={handleBannerClick} />
    </div>
  );
}

export default App;
