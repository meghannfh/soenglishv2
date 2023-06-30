import PodcastWidget from './PodcastWidget';

export default function MediaCard({ icon, explanation, type }){
    return (
        <div className="bg-white p-6 h-full">
           <div className="flex flex-row items-center gap-4 mb-6">
           {icon.length > 0 ? icon.map((icon, idx) => (
             <span className="text-4xl" key={idx}>{icon}</span>
           )) : 'nada'}
            <p className="text-xl">{explanation}</p>
           </div>
           {type === 'podcast' && (
            <PodcastWidget/>           
            )}
        </div>
    )
}