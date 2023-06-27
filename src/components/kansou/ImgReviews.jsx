import ImgReviewCard from "./ImgReviewCard";
import { Fragment } from 'react';
export default function ImgReviews({feedback}){
  return(
    <div className="mt-10 w-full flex md:flex-row md:gap-4">
        {feedback && feedback.map((section, idx) => (
          <div className="w-1/2" key={idx}>
            <h2 className="text-xl font-semibold text-slate-900" id="about-top">{section.category}</h2>
            <div className="mt-4 border-2 border-slate-800 h-96 overflow-y-auto" key={idx}>
              <div className="w-full flex flex-col justify-center px-6">
                {section.imgURLs.map((url, idx) => (
                  <Fragment key={idx}>
                    <ImgReviewCard url={url}/>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}