import SocialsIcon from './SocialsIcon';
import { BsSpotify, BsInstagram } from 'react-icons/bs';
import {FaPodcast} from 'react-icons/fa';
import {SiLinktree} from 'react-icons/si';

export default function SocialsBar(){
  return(
    <div className="w-full flex flex-row items-center text-2xl md:text-xl lg:text-4xl justify-center gap-6">
      <SocialsIcon icon={<BsInstagram />} url={"https://www.instagram.com/so_english_gay/"} number={'one'}/>
      <SocialsIcon icon={<FaPodcast />} url={'https://podcasts.apple.com/jp/podcast/so-caros-thats-so-carrot-%E8%8B%B1%E8%AA%9E%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E7%B5%90%E5%B1%80%E3%83%9D%E3%82%B8%E3%83%86%E3%82%A3%E3%83%96life/id1553711559'} number={'two'}/>
      {/* <SocialsIcon icon={<BsYoutube />} url={'/'} number={'three'}/> */}
      <SocialsIcon icon={<BsSpotify />} url={'https://open.spotify.com/show/6Ryzytf0Kf2jq4Vpz9RPWL?si=17762e1704264f76'} number={'three'}/>
      <SocialsIcon icon={<SiLinktree />} url={'https://linktr.ee/Mr_SoEnglish'} number={'four'}/>
    </div>
  )
}