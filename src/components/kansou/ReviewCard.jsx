export default function ReviewCard({ review, student }){
  return (
    <div className='border-b border-slate-900 max-h-max overflow-y-scroll'>
      {student !== "" && <h5 className="reviews">{student}</h5>}
      <p className="reviews" dangerouslySetInnerHTML={{__html: review}}/>
    </div>
  )
}