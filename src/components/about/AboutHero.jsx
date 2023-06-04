import aboutSo from '../../media/images/IMG_6789.jpeg'

export default function AboutHero(){
  return(
    <div className="flex flex-col max-w-screen">
      <div className="relative w-full h-96 md:h-[20rem] lg:h-[36rem] md:overflow-hidden">
        <img className="absolute w-full h-full object-cover top-0 md:bottom-0" alt={'so smiling to the right at camera'} src={aboutSo}/>
        <h1 className="text-4xl font-bold uppercase absolute top-10 left-7 p-3 bg-white md:text-5xl md:top-24 md:left-36 lg:text-7xl"><span className="italic">Who is</span> So?</h1>
      </div>
      <div className='px-6 pt-24 md:px-24'>
        <h2 className="text-5xl md:text-3xl font-semibold text-slate-900" id="about-top">About</h2>
      </div>
    </div>
  )
}