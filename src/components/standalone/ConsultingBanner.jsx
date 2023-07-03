export default function ConsultingBanner({ handleBannerClick }){

  return(
    <div onClick={(e) => handleBannerClick(e, 'section8')} className='text-white text-2xl md:text-3xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 transition-transform ease-in-out hover:cursor-pointer hover:scale-110'>
        <h5 className="px-9 py-6">有料カウンセリングに申し込む</h5>
    </div>
  )
}

