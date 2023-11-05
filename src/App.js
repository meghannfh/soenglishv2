import {useState} from 'react';
import 'swiper/css';

import Top from './sections/Top';
import Mission from './sections/Mission';
import MediaSection from './sections/MediaSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import StrategySection from'./sections/StrategySection';
import SoRainbowSection from './sections/SoRainbowSection';
import PriceAndSignupSection from './sections/PriceAndSignupSection';
import ContactSection from './sections/ContactSection';
import SoPaintingsSection from './sections/SoPaintingsSection';
import FooterSection from './sections/FooterSection';

import ConsultingBanner from './components/standalone/ConsultingBanner';

function App() {

  const [isTopImageLoaded, setIsTopImageLoaded] = useState(false);

  const handleTopImageLoad = () => {
    setIsTopImageLoaded(true);
  };

  const handleBannerClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
  }

  return (
    <main className="grid place-content-center w-screen">
      <div className={isTopImageLoaded ? 'relative show-background w-screen' : 'relative w-screen'}>
        <Top isTopImageLoaded={handleTopImageLoad}/>
        <div className='lg:h-[300px]'/>
        <Mission />
        <div className='lg:h-[300px]'/>
        <MediaSection />
        <div className='lg:h-[300px]'/>
        <ServicesSection />
        <div className='lg:h-[300px]'/>
        <StrategySection />
        <div className='lg:h-[300px]'/>
        <AboutSection />
        <div className='lg:h-[300px]'/>
        <SoRainbowSection />
        <div className='lg:h-[300px]'/>
        <PriceAndSignupSection />
        <div className='lg:h-[300px]'/>
        <SoPaintingsSection />
        <div className='lg:h-[300px]'/>
        <ContactSection />
        <FooterSection />
        <div className='w-full md:w-auto fixed right-0 bottom-0 z-10'>
          <ConsultingBanner handleBannerClick={handleBannerClick} />
        </div>
      </div>
    </main>
  );
}

export default App;
