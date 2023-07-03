export default function SectionTextbox({ subtitle, imgURL, text, list }){
  return (
    <>
      <div className="w-full flex lg:flex-col">
        <h3 className="mt-12 text-2xl lg:text-3xl lg:leading-relaxed font-semibold text-slate-900">{subtitle !== '' && subtitle}</h3>
        {imgURL && imgURL.map((img, index) => (
        <div className="mt-6 w-fit lg:w-1/3 lg:flex lg:justify-center" key={index}>
          <img src={img} alt={''} className=""/>
        </div>
        ))}
      </div>

      {text && text.map((paragraph, index) => (
      <p className="mt-3 indent-5 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900" key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
      ))}

      {list && (
        <ul>
          {list.map((item, idx) => (
            <li key={idx} className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}