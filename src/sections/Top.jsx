import { useState, useEffect } from 'react';
import SocialsBar from '../components/top/SocialsBar';
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
    <div className='relative'>
      {imageLoaded && (<div className="fixed top-0 z-30">
        <Nav scrollPastTop={scrollPastTop}/>
      </div>
			)}
      <div id='top-image' className="font-bold h-[27rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem] relative overflow-hidden">
        <div className='absolute top-0 right-0 w-full h-full z-10 bg-black/25'></div>
        <img 
          alt="Soichi smiling at camera against cobbled-road backdrop" 
          className="md:object-cover absolute right-0 md:bottom-0 "
          src={imageSrc} 
					onLoad={handleTopImageLoad}/>
      </div>
      <h1 className='absolute bottom-10 md:bottom-16 lg:bottom-32 w-full flex flex-col items-center justify-center text-5xl  md:text-7xl lg:text-9xl text-white z-20'>
        Welcome
        <SocialsBar />
      </h1>
    </div>
  )
}