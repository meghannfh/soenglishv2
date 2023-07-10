import { useState, useEffect } from 'react';
import Nav from '../components/top/Nav';
import largeImg from '../media/images/UpdatedTopImageSoEnglish.webp';
import smallImg from '../media/images/UpdatedTopImgSmallSoEnglish.webp'

export default function Top(){
  const [imageLoaded, setImageLoaded] = useState(false);
  const [topImageHeight, setTopImageHeight] = useState(0);
  const [scrollPastTop, setScrollPastTop] = useState(false);
  // const [imageSrc, setImageSrc] = useState('');

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

  return(
    <div className='relative' id="top">
      {imageLoaded && (<div className="fixed top-0 z-30">
        <Nav scrollPastTop={scrollPastTop}/>
      </div>
			)}
      <div id='top-image' className="font-bold h-[35rem] sm:h-[30rem] md:h-screen relative overflow-hidden">
        <div className='absolute top-0 right-0 w-full h-full z-10 bg-black/25'></div>
        <img 
          srcSet={`${smallImg} 1x ${largeImg} 3x`}
          sizes='100vw'
          alt="Soichi smiling at camera against cobbled-road backdrop" 
          className='h-full w-full object-cover'
          src={smallImg} 
					onLoad={handleTopImageLoad}/>
      </div>
      <h1 className='title-font absolute top-32 flex justify-center w-full text-4xl md:text-6xl xl:text-8xl text-white z-20 font-extrabold'>
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