import MediaCard from "../components/socialmedia/MediaCard"
import { BsSpotify, BsInstagram, BsYoutube } from 'react-icons/bs';
import {FaPodcast, FaLink} from 'react-icons/fa';

export default function MediaSection(){

  const socialMedia = [
    {
      'key': 'spotify',
      'icon': [<BsSpotify />],
      'url': 'https://podcasters.spotify.com/pod/show/thatssocarrot/episodes/3-SoCaro----Our-favorite-English-quotes--Part1-erah16?%24web_only=true&_branch_match_id=1207702973486861218&utm_source=web&utm_campaign=web-share&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq0zMS87IL9ItT03SSywo0MvJzMvWT9XPTYz0z45IS81ySgIAsbZb5zAAAAA%3D',
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'youtube',
      'icon': [<BsYoutube />],
      'url': 'https://www.youtube.com/@socarosthatssocarrotlife3496',
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'apple',
      'icon': [<FaPodcast />],
      'url': 'https://podcasts.apple.com/jp/podcast/so-caros-thats-so-carrot-%E8%8B%B1%E8%AA%9E%E3%81%8C%E3%81%82%E3%82%8C%E3%81%B0%E7%B5%90%E5%B1%80%E3%83%9D%E3%82%B8%E3%83%86%E3%82%A3%E3%83%96life/id1553711559',
      'explanation': `So & Caro's That's So Carrot!~英語があれば結局ポジティブLife~`,
    },
    {
      'key': 'instagram',
      'icon': [<BsInstagram />],
      'url': 'https://www.instagram.com/so_english_gay/',
      'explanation': 'SO ENGLISH!🏳‍🌈Warm Familyを築きたいGayのEnglish Teacher',
    },
    {
      'key': 'other',
      'icon': [<FaLink />],
      'url': 'https://linktr.ee/Mr_SoEnglish',
      'explanation': `その他リンク`,
    },
  ]
  
  return (
    <div className="bg-red-100" id="section2">
      <div className="px-10 py-10 md:px-0 md:mx-20 lg:mx-60">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#AD4173]">SO's MEDIA</h2>
      <div className="mt-10 flex flex-col md:grid md:grid-cols-2 md:auto-cols-fr gap-4 place-content-center items-stretch w-full">
        {socialMedia && socialMedia.map((medium, idx) => (
          <MediaCard icon={medium.icon} explanation={medium.explanation} type={medium.key} url={medium.url} key={idx}/>
        ))}
      </div>
    </div>    
  </div>
  )
}