import Top from './sections/Top'
import PodcastSection from './sections/PodcastSection';
import AboutSection from './sections/AboutSection';
import MethodSection from'./sections/MethodSection';
import KansouSection from './sections/KansouSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

import BackToTop from './components/top/BackToTop';

function App() {
  return (
    <div className='h-screen relative fixed-width-xlg-screens'>
      <Top />
        <div>
          <PodcastSection />
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
        <BackToTop />
    </div>
  );
}

export default App;
