import PodcastWidget from "./PodcastWidget";
import YoutubeWidget from "./YoutubeWidget";

export default function MediaCard({ icon, explanation, type, url }){
  return (
      	<a href={url} className="block bg-white h-fit rounded-lg transition-transform ease-in-out hover:cursor-pointer hover:-translate-y-3 hover:-translate-x-3 p-3">
			<div className="flex flex-row items-center justify-center gap-3">
      	 		{icon.length > 0 && icon.map((icon, idx) => (
      	   			<span className="text-4xl" key={idx}>{icon}</span>
      	 		))}
      			<p className="text-md">{explanation}</p>
      		</div>
			{type === 'spotify' ? (<PodcastWidget />) : type === 'youtube' ? (<YoutubeWidget />) : null}
    	</a>
      
  )
}