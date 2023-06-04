import { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

export default function BackToTop(){
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const podcastSection = document.getElementById('section1');
      const podcastSectionOffset = podcastSection.offsetTop + podcastSection.offsetHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      setShowBackToTop(scrollPosition > podcastSectionOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return(
    <div className={`fixed right-10 text-3xl md:text-2xl font-semibold hover:cursor-pointer ${
      showBackToTop ? 'bottom-20 transition-all duration-300' : '-bottom-32'
    }`} onClick={handleBackToTopClick}>
      <span className='flex flex-row items-center gap-2 p-2 bg-white/75 border-2 border-slate-900 hover-bg icon-transition'>
        Top <BiArrowToTop />
      </span>
    </div>
  )
}