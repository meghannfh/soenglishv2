import ImgReviewCard from "./ImgReviewCard";
import { Fragment } from 'react';
export default function ImgReviews({feedback}){
  return(
    <div className="mt-10 w-full flex flex-col md:flex-row md:gap-4">
        {feedback && feedback.map((section, idx) => (
          <div className="mt-3 md:mt-0 md:w-1/2" key={idx}>
            {/*WHAT IS THE ABOUT-TOP ID FOR? */}
            <h4 id="about-top">{section.category}</h4>
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