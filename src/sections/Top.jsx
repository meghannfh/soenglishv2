import { useState, useEffect } from 'react';
import Nav from '../components/top/Nav';

export default function Top(){
  const [imageLoaded, setImageLoaded] = useState(false);
  const [topImageHeight, setTopImageHeight] = useState(0);
  const [scrollPastTop, setScrollPastTop] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > topImageHeight) {
        setScrollPastTop(true);
      } else {
        setScrollPastTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topImageHeight]);

	const handleTopImageLoad = () => {
    setTopImageHeight(document.getElementById("top-image").clientHeight - 10);
    setImageLoaded(true);
  };


  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const smallScreenWidth = 640;

      if (viewportWidth <= smallScreenWidth) {
        setImageSrc('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1685724564/smallscreensUpdated_vvjitj.webp');
      } else {
        setImageSrc('https://res.cloudinary.com/dc1aiqs4p/image/upload/v1685641077/topimage2_yc6hjr.webp');
      }
    };

    // Set initial image based on current viewport width
    handleResize();

    // Update image on window resize
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return(
    <div className='relative' id="top">
      {imageLoaded && (<div className="fixed top-0 z-30">
        <Nav scrollPastTop={scrollPastTop}/>
      </div>
			)}
      <div id='top-image' className="font-bold h-[35rem] sm:h-[30rem] lg:h-[40rem] xl:h-[50rem] relative overflow-hidden">
        <div className='absolute top-0 right-0 w-full h-full z-10 bg-black/25'></div>
        <img 
          alt="Soichi smiling at camera against cobbled-road backdrop" 
          className="md:object-cover absolute right-0 md:bottom-0 "
          src={imageSrc} 
					onLoad={handleTopImageLoad}/>
      </div>
      <h1 className='absolute bottom-10 md:bottom-16 lg:bottom-32 w-full flex flex-col items-center justify-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white z-20 font-bold'>
        <div className='flex flex-row'> 
          <span className='text-[#FF7D7D]'>明</span>
          <span className='text-[#FDC56F]'>日</span>
          <span className='text-[#FDE06F]'>が</span>
          もっと、
          <span className='text-[#2FFF9B]'>楽</span>
          <span className='text-[#38B7FF]'>し</span>
          <span className='text-[#E587FF]'>み</span>
          になる
          </div>
      </h1>
    </div>
  )
}