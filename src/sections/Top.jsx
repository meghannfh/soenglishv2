import { useState, useEffect } from 'react';
import Nav from '../components/top/Nav';

export default function Top({isTopImageLoaded}){
  const [imageLoaded, setImageLoaded] = useState(false);
  const [topImageHeight, setTopImageHeight] = useState(0);
  const [scrollPastTop, setScrollPastTop] = useState(false);

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
    isTopImageLoaded();
  };


  return(
    <div className='relative' id="top">
      {imageLoaded && (<div className="fixed top-0 z-30 w-full fixed-width-xlg-screens">
        <Nav scrollPastTop={scrollPastTop} />
      </div>
			)}
      <div id='top-image' className="font-bold h-screen md:h-screen relative overflow-hidden">
        <div className='absolute top-0 right-0 w-full h-full z-10 bg-black/25'></div>
        <picture className="h-full w-full flex" onLoad={handleTopImageLoad}>
          <source media="(min-width: 1025px)" srcSet="https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_1600,g_auto/v1688493246/UpdatedTopImageSoEnglish_f8anih.webp" />
          <source media="(min-width: 769px)" srcSet="https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_1024/v1688493246/UpdatedTopImageSoEnglish_f8anih.webp" />
          <source media="(min-width: 426px)" srcSet="https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_768/v1688493246/UpdatedTopImageSoEnglish_f8anih.webp" />
          <img src="https://res.cloudinary.com/dc1aiqs4p/image/upload/v1695602558/mobileBG_i65ha8.webp" className="h-full w-full object-cover" alt="yeah"/>
        </picture>
      </div>
      <h1 className='title-font w-full flex justify-center text-4xl text-white z-20 font-extrabold absolute top-28 md:top-28 md:text-6xl lg:top-[15rem] lg:text-7xl xl:text-8xl'>
        <div className='flex flex-col gap-y-3 md:gap-y-5 lg:gap-0 lg:flex-row'> 
          <div className='flex flex-row content-center'>
            <span className='text-[#FF7D7D]'>明</span>
            <span className='text-[#FDC56F]'>日</span>
            <span className='text-[#FDE06F]'>が</span>
            <span>もっと、</span>
          </div>
          <div className='flex flex-row md:pl-32 lg:pl-0 justify-center'>
            <span className='text-[#2FFF9B]'>楽</span>
            <span className='text-[#38B7FF]'>し</span>
            <span className='text-[#E587FF]'>み</span>
            <span>になる</span>  
          </div>  
        </div>
      </h1>
      <div className='absolute bottom-24 md:bottom-30 z-10 w-full flex justify-center md:justify-end md:pr-10 h-24 md:h-auto'>
        <img 
          src='https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_420/v1690301492/Hellotmrsoenglishtext_a9dyk3.webp'
          alt='hello, tomorrow so english!'/>
      </div>
    </div>
  )
}

//src='https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_1600,g_auto/v1688493246/UpdatedTopImageSoEnglish_f8anih.webp'