import aboutSo from '../../media/images/IMG_6789.jpeg'

export default function AboutHero(){
  return(
    <div className="flex flex-col max-w-screen">
      <div className="relative w-full h-96 md:h-[20rem] lg:h-[36rem] md:overflow-hidden">
        <img className="absolute w-full h-full object-cover top-0 md:bottom-0" alt={'so smiling to the right at camera'} src={aboutSo}/>
      </div>
    </div>
  )
}