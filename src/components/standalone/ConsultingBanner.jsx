export default function ConsultingBanner({ handleBannerClick }){

  return(
    <div onClick={(e) => handleBannerClick(e, 'section8')} className='text-white text-xl md:text-2xl bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 transition-transform ease-in-out hover:cursor-pointer hover:scale-110'>
        <h5 className="px-3 md:px-3 py-3 text-center">有料カウンセリングに申し込む</h5>
    </div>
  )
}

