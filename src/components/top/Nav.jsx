import { useState } from 'react'
import Menu from './Menu'

export default function Nav({ scrollPastTop }){
  const [open, setOpen] = useState(true);

  function handleClick(){
    setOpen(prevOpen => !prevOpen)
  }

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
  }

  return(
    <div className="relative flex flex-row justify-between w-screen h-fit fixed-width-xlg-screens">
      <div className="pl-6 w-min absolute left-0 h-[53.98px] md:h-[77.99px] flex flex-col justify-center z-30">
        <a href="#top" className={`font-semibold tracking-widest md:text-lg ${scrollPastTop || open ? 'text-black' : 'text-white'}`}>SO<span className="italic uppercase" onClick={(e) => handleLinkClick(e, 'top')}>English!</span></a>
      </div>
      <div className="grid place-content-center p-3 md:p-6 w-min absolute right-0 z-30">
        <button onClick={handleClick} className={`block hamburger focus:outline-none`}>
          <span className={ open ? `open hamburger-top ${scrollPastTop || open ? 'bg-black' : 'bg-white'}` : `hamburger-top ${scrollPastTop ? 'bg-black' : 'bg-white'}`}></span>
          <span className={ open ? `open hamburger-middle ${scrollPastTop || open ? 'bg-black' : 'bg-white'}` : `hamburger-middle ${scrollPastTop ? 'bg-black' : 'bg-white'}`}></span>
          <span className={ open ?`open hamburger-bottom ${scrollPastTop || open ? 'bg-black' : 'bg-white'}` : `hamburger-bottom ${scrollPastTop ? 'bg-black' : 'bg-white'}`}></span>
        </button>
      </div>
      <div className={ open ? `show menu` : `menu`}>
        <Menu />
      </div>
    </div>
  )
}