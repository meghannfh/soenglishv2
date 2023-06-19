export default function MediaCard({ icon, explanation }){
    return (
        <div className="border border-slate-800 rounded-md bg-white p-6 lg:h-[500px]">
           <div className="flex flex-row items-center gap-4 mb-6">
           {icon.length > 0 ? icon.map((icon, idx) => (
             <span className="text-4xl" key={idx}>{icon}</span>
           )) : 'nada'}
            <p className="text-xl">{explanation}</p>
           </div>
        </div>
    )
}