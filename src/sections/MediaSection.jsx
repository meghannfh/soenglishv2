// import PodcastWidget from '../components/podcast/PodcastWidget';
import MediaCard from "../components/socialmedia/MediaCard"
import { BsSpotify, BsInstagram, BsYoutube } from 'react-icons/bs';
import {FaPodcast} from 'react-icons/fa';

export default function MediaSection(){

  const socialMedia = [
    {
      'icon': <BsInstagram />,
      'explanation': 'SO ENGLISH!🏳‍🌈Warm Familyを築きたいGayのEnglish Teacher'
    },
    {
      'icon': [<BsSpotify />, <FaPodcast />],
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`
    },
    {
      'icon': <BsYoutube />,
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`
    },
  ]
  
  return (
    <div className="px-6 py-24 md:px-24 bg-slate-300" id="section3">
      <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">SO's MEDIA</h2>
      {socialMedia ? socialMedia.map((medium, idx) => (
        <MediaCard icon={medium.icon} explanation={medium.explanation} key ={idx}/>
      )) : 'nada'}
    </div>
  )
}