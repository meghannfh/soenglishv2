export default function SectionTextbox({ subtitle, imgURL, text, list, currentIdx, sectionImg }){


  const titleColors = [
    'text-rose-500',
    'text-red-500',
    'text-orange-500',
    'text-amber-500',
    'text-yellow-500',
    'text-lime-500',
    'text-green-500',
    'text-emerald-500',
    'text-teal-500',
    'text-cyan-500',
    'text-sky-500',
    'text-blue-500',
    'text-indigo-500',
    'text-violet-500',
    'text-purple-500',
    'text-fuchsia-500',
    'text-pink-500',
  ]

  const subtitleColor = titleColors[currentIdx % titleColors.length]
  
  const titlesToIncrease = ["一味も二味も違った、本間家の教育。", "チャレンジを応援する国、アメリカ。", "違うことだらけの海外学校生活。"];

  const addClass = titlesToIncrease.includes(subtitle);

  return (
    <>
      <div className="w-full">
      {subtitle !== '' &&  <h3 className={`mb-6 ${subtitleColor} ${ addClass ? 'increase-text' : ''}`}>{subtitle}</h3>}
        {imgURL && imgURL.map((img, index) => (
        <div className="mt-6 w-full flex justify-center" key={index}>
          <img 
            src={img} 
            alt={''} 
            className=''/>
        </div>
        ))}
      </div>
      {sectionImg && <img src={sectionImg} className="w-1/5 inline-block float-left -scale-x-100" alt="graphic" />}
      {text && text.map((paragraph, index) => (
        <p className="indent clear-right" key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
      ))}

      {list && (
        <ul>
          {list.map((item, idx) => (
            <li key={idx} className="mt-4 text-lg font-medium text-slate-900">{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}