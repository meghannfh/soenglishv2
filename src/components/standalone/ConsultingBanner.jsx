export default function ConsultingBanner({ handleBannerClick }){

  return(
    <div onClick={(e) => handleBannerClick(e, 'section8')} className='text-xl md:text-2xl transition-transform ease-in-out hover:cursor-pointer hover:scale-110 flex justify-end'>
        <h5 className="mt-0 w-full md:w-1/2 px-3 md:px-3 py-3 text-center text-white bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 font-normal">有料カウンセリングに申し込む</h5>
    </div>
  )
}

