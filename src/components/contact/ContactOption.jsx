export default function ContactOption({ icon, text}){
    return(
        <div>
            <span className="flex flex-row gap-2 items-center">
                {icon} 
                <p>{text}</p>
            </span>
        </div>
    )
}