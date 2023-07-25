export default function SectionTextbox({ subtitle, imgURL, text, list, increaseImgSize, decreaseImgSize, currentIdx, sectionImg }){

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

  return (
    <>
      <div className="w-full">
      {subtitle !== '' &&  <h3 className={`mt-12 text-xl lg:text-2xl font-semibold ${subtitleColor}`}>{subtitle}</h3>}
        {imgURL && imgURL.map((img, index) => (
        <div className="mt-6 w-full flex justify-center" key={index}>
          {/*the sections that have a large image of multiple images needed to be increased to fit the needs of the client so a key was added to those sections equal to a boolean indicating whether to increase or decrease the size of the image and those widths would be conditionally added in the class on the img tag. only the single */}
          <img 
            src={img} 
            srcSet={``}
            sizes={``}
            alt={''} 
            className=''/>
        </div>
        ))}
      </div>
      {sectionImg && <img src={sectionImg} className="w-1/5 hidden lg:float-left -scale-x-100" alt="graphic" />}
      {text && text.map((paragraph, index) => (
        <p className="mt-4 indent-5 text-lg font-medium md:leading-loose text-slate-900 clear-right" key={index} dangerouslySetInnerHTML={{__html: paragraph}} />
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