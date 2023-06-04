export default function Menu({ handleLinkIsClicked }){

  /*check for truthy of open. if true then on click of one of the links we need to set the top of the menu to 0 again*/
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
    handleLinkIsClicked()
  }
/*have the height & text dynamically switch to screen and text 3xl only when it is shown */
  return(
    <div>
      <ul className="flex flex-col pt-14 h-screen text-3xl md:text-lg md:p-0 md:flex-row md:h-20 md:justify-center md:gap-6 md:items-center lg:pr-0 rainbow-bg lg:text-xl">
        <li>
          <a href="#section1" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section1')}>mission</a>
        </li>
        <li>
          <a href="#section2" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section2')}>about</a>
        </li>
        <li>
          <a href="#section3" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section3')}>method</a>
        </li>
        {/* <li>
          <a href="#section3" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section3')}>services</a>
        </li> */}
        {/* <li>
          <a href="#section3" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section3')}>lgbtq+</a>
        </li> */}
        <li>
          <a href="#section5" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section4')}>feedback</a>
        </li>
        <li>
          <a href="#section4" className="hover-underline-animation" onClick={(e) => handleLinkClick(e, 'section5')}>contact</a>
        </li>
      </ul>
    </div>
  )
}