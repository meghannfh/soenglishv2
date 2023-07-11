// import aboutSo from '../../media/images/IMG_6789.jpeg'

export default function AboutHero(){
  return(
    <div className="flex flex-col max-w-screen">
      <div className="relative w-full h-96 md:h-[20rem] lg:h-[36rem] md:overflow-hidden">
        <img className="absolute w-full h-full object-cover top-0 md:bottom-0" alt={'so smiling to the right at camera'} src={'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687283090/ec2da6c1-20bf-4388-8adc-775af6ece17a_q4ujpu.jpg'}/>
      </div>
    </div>
  )
}