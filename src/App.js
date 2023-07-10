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

  const handleBannerClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
  }

  return (
    <div className='relative fixed-width-xlg-screens'>
      <Top />
      <div className='h-[300px]'/>
      <Mission />
      <div className='h-[100px]'/>
      <MediaSection />
      <div className='h-[100px]'/>
      <ServicesSection />
      <div className='h-[100px]'/>
      <StrategySection />
      <div className='h-[100px]'/>
      <AboutSection />
      <div className='h-[100px]'/>
      <SoRainbowSection />
      <div className='h-[100px]'/>
      <PriceAndSignupSection />
      <div className='h-[100px]'/>
      <SoPaintingsSection />
      <div className='h-[100px]'/>
      <ContactSection />
      <FooterSection />
      <div className='fixed right-0 bottom-0 z-10'>
        <ConsultingBanner handleBannerClick={handleBannerClick} />
      </div>
    </div>
  );
}

export default App;
