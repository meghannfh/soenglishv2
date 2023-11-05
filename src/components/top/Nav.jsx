import { useState, useEffect } from 'react';
import Menu from './Menu';

export default function Nav({ scrollPastTop }) {
  const isMobileScreen = window.innerWidth <= 767;
  const [open, setOpen] = useState(!isMobileScreen);

  function handleClick() {
    setOpen(prevOpen => !prevOpen);
  }

  useEffect(() => {
    let isInitialScroll = true;

    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 600 && isInitialScroll) {
        setOpen(false);
        isInitialScroll = false;
      }

      if (scrollPosition === 600) {
        isInitialScroll = true;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  //handle closing the menu when a link is clicked on smaller screens
  const handleLinkClick = () => {
    if(isMobileScreen){
      setOpen(false)
    }
  }

  return (
    <div className="relative flex flex-row justify-between">
      <div className="pl-6 w-min absolute left-0 h-[53.98px] md:h-[77.99px] flex flex-col justify-center z-30">
        <a href="#top" className={`font-semibold tracking-widest md:text-lg ${scrollPastTop || (open) ? 'text-black' : 'text-white'}`}>
          SO<span className="italic uppercase" onClick={(e) => handleLogoClick(e, 'top')}>English!</span>
        </a>
      </div>
      <div className="grid place-content-center p-3 md:p-6 w-min absolute right-0 z-30">
        <button onClick={handleClick} className={`block hamburger focus:outline-none`}>
          <span className={open ? `open hamburger-top ${scrollPastTop || (open) ? 'bg-black' : 'bg-white'}` : `hamburger-top ${scrollPastTop ? 'bg-black' : 'bg-white'}`}></span>
          <span className={open ? `open hamburger-middle ${scrollPastTop || (open) ? 'bg-black' : 'bg-white'}` : `hamburger-middle ${scrollPastTop ? 'bg-black' : 'bg-white'}`}></span>
          <span className={open ? `open hamburger-bottom ${scrollPastTop || (open) ? 'bg-black' : 'bg-white'}` : `hamburger-bottom ${scrollPastTop ? 'bg-black' : 'bg-white'}`}></span>
        </button>
      </div>
      <div className={open ? `menu show` : `menu`}>
        <Menu handleClose={handleLinkClick}/>
      </div>
    </div>
  );
}