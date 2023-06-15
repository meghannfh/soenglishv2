import ReviewCard from "./ReviewCard";

export default function Reviews({feedback}){




  return(
    <div className="mt-10 md:grid md:place-content-center">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900" id="about-top">生徒からの感想</h2>
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