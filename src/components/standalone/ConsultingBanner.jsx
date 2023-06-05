export default function ConsultingBanner({ handleShowQR }){

  return(
    <div onClick={handleShowQR} className='fixed right-0 bottom-40 z-30 text-white text-2xl md:text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md shadow-slate-800 transition-transform ease-in-out hover:cursor-pointer hover:scale-110'>
        <h5 className="p-4">有料カウンセリングに申し込む</h5>
    </div>
  )
}

