export default function Footer() {

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
      }

    return (
        <div className="h-80">
            <div className="w-full h-[80%] flex flex-row">
                <div className="flex-1 w-full object-contain flex justify-center">
                    <img src={"https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684280698/IMG_4054-removebg-preview_x9ibmw.png"} alt={'so english logo'} className="h-full"/>
                </div>
                <div className="h-full flex-1">
                    <ul className="h-full flex flex-row footer-list">
                        <li className="flex w-full h-full justify-center">
                            <a href="#section1" onClick={(e) => handleLinkClick(e, 'section1')}>mission</a>
                            <a href="#section2" onClick={(e) => handleLinkClick(e, 'section2')}>media</a>
                            <a href="#section3" onClick={(e) => handleLinkClick(e, 'section3')}>services</a>
                            <a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>strategy</a>
                        </li>
                        <li className="flex w-full h-full justify-center">
                            <a href="#section5" onClick={(e) => handleLinkClick(e, 'section5')}>about</a>
                            <a href="#section6" onClick={(e) => handleLinkClick(e, 'section6')}>lgbtq+</a>
                            <a href="#section7" onClick={(e) => handleLinkClick(e, 'section7')}>price</a>
                            <a href="#section8" onClick={(e) => handleLinkClick(e, 'section8')}>contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[20%] text-center">
                <h5>© SOENGLISH | All Rights Reserved</h5>
            </div>
        </div>
    )
}