export default function MediaCard({ icon, explanation }){
    return (
        <div className="flex flex-row items-center border border-slate-800 rounded-md bg-white p-4 mt-6 gap-4">
           {icon.length > 0 ? icon.map((icon, idx) => (
             <span className="text-4xl" key={idx}>{icon}</span>
           )) : 'nada'}
            <p className="text-xl">{explanation}</p>
        </div>
    )
}