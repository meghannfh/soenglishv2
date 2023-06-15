export default function ReviewCard({ review, student }){
  return (
    <div className='border-b border-slate-900 py-7 max-h-max overflow-y-scroll'>
      <h4>{student}</h4>
      <p className='mt-4'>{review}</p>
    </div>
  )
}