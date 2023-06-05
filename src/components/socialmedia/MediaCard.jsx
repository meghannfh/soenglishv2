export default function MediaCard({ icon, explanation }){
    return (
        <div className="border border-slate-800 rounded-md">
            <span>{icon}</span>
            <p>{explanation}</p>
        </div>
    )
}