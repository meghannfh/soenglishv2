export default function ReviewCard({ text, studentName }){
  return (
    <div className='border-b border-slate-900 py-7 max-h-max overflow-y-scroll'>
      <h4>{studentName}</h4>
      <p className=''>{text}</p>
    </div>
  )
}