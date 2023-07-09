import MediaCard from "../components/socialmedia/MediaCard"
import { BsSpotify, BsInstagram, BsYoutube } from 'react-icons/bs';
import {FaPodcast, FaLink} from 'react-icons/fa';

export default function MediaSection(){

  const socialMedia = [
    {
      'key': 'instagram',
      'icon': [<BsInstagram />],
      'url': 'https://www.instagram.com/so_english_gay/',
      'explanation': 'SO ENGLISH!🏳‍🌈Warm Familyを築きたいGayのEnglish Teacher',
    },
    {
      'key': 'spotify',
      'icon': [<BsSpotify />],
      'url': 'https://open.spotify.com/show/6Ryzytf0Kf2jq4Vpz9RPWL?si=17762e1704264f76',
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'apple',
      'icon': [<FaPodcast />],
      'url': 'https://podcasts.apple.com/jp/podcast/so-caros-thats-so-carrot-%E8%8B%B1%E8%AA%9E%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E7%B5%90%E5%B1%80%E3%83%9D%E3%82%B8%E3%83%86%E3%82%A3%E3%83%96life/id1553711559',
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'youtube',
      'icon': [<BsYoutube />],
      'url': '',
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'other',
      'icon': [<FaLink />],
      'explanation': `その他リンク`,
    },
  ]
  
  return (
    <div className="px-6 py-24 md:px-24 bg-red-100" id="section2">
      <h2 className="text-5xl md:text-4xl font-semibold text-[#AD4173]">SO's MEDIA</h2>
      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:flex-wrap mt-10">
        {socialMedia ? socialMedia.map((medium) => (
          <a href={medium.url && medium.url} key={medium.key} className="lg:w-[30%] h-[100px]">
            <MediaCard icon={medium.icon} explanation={medium.explanation} type={medium.key}/>
          </a>
        )) : 'nada'}
      </div>
    </div>
  )
}