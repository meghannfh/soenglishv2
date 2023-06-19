// import PodcastWidget from '../components/podcast/PodcastWidget';
import MediaCard from "../components/socialmedia/MediaCard"
import { BsSpotify, BsInstagram, BsYoutube } from 'react-icons/bs';
import {FaPodcast} from 'react-icons/fa';

export default function MediaSection(){

  const socialMedia = [
    {
      'key': 1,
      'icon': [<BsInstagram />],
      'explanation': 'SO ENGLISH!🏳‍🌈Warm Familyを築きたいGayのEnglish Teacher',
    },
    {
      'key': 2,
      'icon': [<BsSpotify />, <FaPodcast />],
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 3,
      'icon': [<BsYoutube />],
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
  ]
  
  return (
    <div className="px-6 py-24 md:px-24 bg-slate-300" id="section3">
      <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">SO's MEDIA</h2>
      <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row lg:justify-between lg:flex-wrap mt-10">
        {socialMedia ? socialMedia.map((medium, idx) => (
          <a href="/" key={idx} className="lg:w-[30%] media-box-shadow">
            <MediaCard icon={medium.icon} explanation={medium.explanation} />
          </a>
        )) : 'nada'}
      </div>
    </div>
  )
}