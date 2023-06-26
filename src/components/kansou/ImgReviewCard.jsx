export default function ImgReviewCard({ url }){
  console.log(url)
    return (
      <div className='border-b border-slate-900 py-7 max-h-max overflow-y-scroll'>
        <img src={url} className='mt-4' alt={''}/>
      </div>
    )
  }