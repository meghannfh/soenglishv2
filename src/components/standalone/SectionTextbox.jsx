export default function SectionTextbox({ subtitle, text }){
  //we need to map through the text arr too and return each one 

  return (
    <>
      <h3 className="mt-12 text-2xl font-semibold text-slate-900">{subtitle}</h3>
      {text ? text.map((paragraph, index) => (
        <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900" key={index}>{paragraph}</p>
      )) : []}
    </>
  )
}