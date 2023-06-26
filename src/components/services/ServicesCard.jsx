import Reviews from "../kansou/Reviews";
import ImgReviews from "../kansou/ImgReviews";

export default function ServicesCard({ serviceTitle, startDate, capacity, frequency, details, projectsList, lessonVideo, feedback, otherList, feedbackImgURL, adviceReportExample }) {
    const hasLessonVideo = lessonVideo && lessonVideo !== '';
    const hasProjectsList = projectsList && projectsList.length > 0;
    const hasOtherList = otherList && otherList.length > 0;
    const hasFeedbackImgURL = feedbackImgURL && feedbackImgURL.length > 0;
    const hasAdviceReportExample = adviceReportExample && adviceReportExample.length > 0;
  
    return (
      <div>
        <h3 className="mt-20 text-5xl md:text-3xl font-semibold text-slate-900">{serviceTitle}</h3>
        <div className="flex flex-row gap-3 mt-6 text-2xl md:text-xl">
          <h4 className="mt-3">{startDate && startDate !== '' && startDate + ','}</h4>
          <h4 className="mt-3">{capacity && capacity !== '' && capacity}</h4>
        </div>
        <h4 className="mt-3 text-2xl md:text-xl leading-relaxed md:leading-loose">{frequency && frequency}</h4>
        <div className="mt-10">
          {details &&
            details.map((detail, idx) => (
              <p key={idx} className="mt-5 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900" dangerouslySetInnerHTML={{__html: detail}} />
            ))}
          {hasLessonVideo && (
            <div className="w-full h-[400px] lg:h-[550px] mt-10">
              {lessonVideo} {/* Assuming the lessonVideo prop is a valid JSX element */}
            </div>
          )}
        </div>
        {hasProjectsList && (
          <ul className="mt-10 w-full">
            {projectsList && projectsList.map((project, idx) => (
              <li key={idx} className="text-left block mt-5 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">+ {project}</li>
            ))}
          </ul>
        )}
        {hasOtherList && (
          <>
            {otherList.map((item, idx) => (
              <div key={idx} className="mt-12">
                <h4 className="text-2xl leading-relaxed md:leading-loose font-semibold text-slate-900">{item.title}</h4>
                <p className="text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">{item.detail}</p>
                {item.imgURL && <img src={item.imgURL} alt={item.title} className="mt-10"/>}
                {item.feedback && <ImgReviews feedback={item.feedback} />}
              </div>
            ))}
          </>
        )}
        {hasFeedbackImgURL && hasAdviceReportExample && (
          <div className="w-full flex md:flex-row gap-6 mt-10">
            <div className="md:w-1/2">
              {feedbackImgURL.map((url, idx) => (
                  <img src={url} alt={'chat feedback screenshots'} key={idx}/>
                ))
              }
            </div>
            <div className="md:w-1/2">
              {adviceReportExample.map((url, idx) => (
                  <img src={url} alt={'advice report example screenshots'} key={idx}/>
                ))
              }
            </div>
          </div>
        )}
        <div className={ feedback?.length > 0 ? 'block' : 'hidden'}>
          <Reviews feedback={feedback} alt={'advice report example'}/>
        </div>
      </div>
    );
  }
  
  
  
  
  
  