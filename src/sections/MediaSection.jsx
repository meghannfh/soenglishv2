// import PodcastWidget from '../components/podcast/PodcastWidget';
import MediaCard from "../components/socialmedia/MediaCard"
import { BsSpotify, BsInstagram, BsYoutube } from 'react-icons/bs';
import {FaPodcast} from 'react-icons/fa';

export default function MediaSection(){

  const socialMedia = [
    {
      'key': 'instagram',
      'icon': [<BsInstagram />],
      'explanation': 'SO ENGLISH!🏳‍🌈Warm Familyを築きたいGayのEnglish Teacher',
    },
    {
      'key': 'podcast',
      'icon': [<BsSpotify />, <FaPodcast />],
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'youtube',
      'icon': [<BsYoutube />],
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
  ]
  
  return (
    <div className="px-6 py-24 md:px-24 bg-red-100" id="section2">
      <h2 className="text-5xl md:text-4xl font-semibold text-[#AD4173]">SO's MEDIA</h2>
      <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row lg:justify-between lg:flex-wrap mt-10">
        {socialMedia ? socialMedia.map((medium) => (
          <a href="/" key={medium.key} className="lg:w-[30%]">
            <MediaCard icon={medium.icon} explanation={medium.explanation} type={medium.key}/>
          </a>
        )) : 'nada'}
      </div>
    </div>
  )
}