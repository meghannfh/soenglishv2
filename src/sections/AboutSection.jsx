import AboutHero from "../components/about/AboutHero";
import AboutCardOne from "../components/about/AboutCardOne";
import AboutCardTwo from "../components/about/AboutCardTwo";
import AboutCardThree from "../components/about/AboutCardThree";
import AboutCardFour from "../components/about/AboutCardFour";
import AboutNextBtn from "../components/about/AboutNextBtn";
import { useState } from 'react';

export default function AboutSection() {
  const aboutCards = [
    <AboutCardOne />,
    <AboutCardTwo />,
    <AboutCardThree />,
    <AboutCardFour />
  ];
  const [count, setCount] = useState(0)

  const handleClick = (isBackBtn) => {
    if (isBackBtn){
      setCount((prevCount) => prevCount - 1);
    } else{
      setCount((prevCount) => {
        if (prevCount < aboutCards.length){
          return prevCount+1;
        } else {
          return prevCount = 0;
        }
      })
    }
    scrollToAboutTop();
  }

  const scrollToAboutTop = () => {
    const aboutTopElement = document.getElementById("about-top");
    aboutTopElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  });
  };

  return(
    <div id="section2">
      <AboutHero />
      <div className="flex flex-col px-6 pb-10 md:px-24 items-end">
        {aboutCards[count]}
        <div className="w-full flex flex-row justify-between">
          {count > 0 && <AboutNextBtn text={"前へ"} handleClick={() => handleClick(true)}/>}
          {count < aboutCards.length - 1 && <AboutNextBtn text={"次へ"} handleClick={() => handleClick(false)}/>}
        </div>
      </div>
    </div>
  )
}