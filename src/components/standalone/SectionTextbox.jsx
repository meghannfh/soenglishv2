export default function SectionTextbox({ title, paragraphs }){

    const subtitle = paragraphs.map((paragraph, idx) => {
        return <h3 key={idx}>{paragraph.subtitle}</h3>
    })

    //we need to map through the text arr too and return each one 

    return(
        <div className="flex flex-col px-6 py-24 md:px-24">
            <h2 className="mt-6 font-semibold text-2xl md:text-5xl text-[#282828]">{title}</h2>
            {subtitle}
        </div>
    )
}