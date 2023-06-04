
export default function SocialsIcon({ icon, url, number }){
  return(
    <a href={url} className={`${number} animate fadeInUp p-2 rounded-full bg-white/25 transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800/50 hover:-translate-y-6`}>
    	{icon}
    </a>
  )
}