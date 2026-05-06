export default function Menu({ handleClose }){

  /*check for truthy of open. if true then on click of one of the links we need to set the top of the menu to 0 again*/
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    handleClose();
  }
/*have the height & text dynamically switch to screen and text 3xl only when it is shown */
  return(
    <div className="h-screen w-screen grid place-content-center rainbow-bg md:h-20 md:flex lg:justify-center fixed-width-xlg-screens">
      <ul className="flex flex-col gap-4 w-full text-2xl md:gap-0 md:text-xl md:p-0 md:flex-row md:flex-wrap md:gap-x-6 md:w-[470px] md:h-full md:justify-center xl:gap-6 xl:items-center xl:w-full xl:text-xl menu-list">
        <li>
          <a href="#section1" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section1')}>mission</a>
        </li>
        <li>
          <a href="#section2" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section2')}>media</a>
        </li>
        <li>
          <a href="#section3" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section3')}>services</a>
        </li>
        <li>
          <a href="#section4" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section4')}>strategy</a>
        </li>
        <li>
          <a href="#section5" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section5')}>about</a>
        </li>
        <li>
          <a href="#section6" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section6')}>lgbtq+</a>
        </li>
        <li>
          <a href="#section7" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section7')}>price</a>
        </li>
        <li>
          <a href="#section9" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section9')}>paintings</a>
        </li>
        <li>
          <a href="#section8" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section8')}>contact</a>
        </li>
      </ul>
    </div>
  )
}