import ReviewCard from "./ReviewCard";
export default function Reviews({feedback, feedbackTitle}){
  return(
    <div className="mt-10 md:grid md:place-content-center">
      <div>
        <h4 id="about-top">{feedbackTitle}</h4>
      </div>
      <div className="mt-4 border-2 border-slate-800 h-96 overflow-y-auto">
        <div className="w-full flex flex-col justify-center px-6">
          {feedback && feedback.map((review, idx) => {
            return (
              <ReviewCard review={review.comment} student={review.studentName} key={idx}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}