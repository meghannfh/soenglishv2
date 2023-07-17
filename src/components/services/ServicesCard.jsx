import Reviews from "../kansou/Reviews";
import ImgReviews from "../kansou/ImgReviews";

export default function ServicesCard({ serviceTitle, startDate, capacity, frequency, details, projectsList, lessonVideo, feedback, otherList, feedbackImgURL, adviceReportExample, sectionImg, currentIdx }) {
    const hasLessonVideo = lessonVideo && lessonVideo !== '';
    const hasProjectsList = projectsList && projectsList.length > 0;
    const hasOtherList = otherList && otherList.length > 0;
    const hasFeedbackImgURL = feedbackImgURL && feedbackImgURL.length > 0;
    const hasAdviceReportExample = adviceReportExample && adviceReportExample.length > 0;

    const titleColors = [
      'text-red-500',
      'text-orange-500',
      'text-yellow-500',
      'text-green-500',
      'text-emerald-500',
      'text-teal-500',
      'text-cyan-500',
      'text-blue-500',
      'text-indigo-500',
      'text-fuchsia-500',
      'text-pink-500'
    ]
  
    return (
      <div>
        <h3 className={`mt-20 text-xl lg:text-2xl font-semibold ${titleColors[currentIdx]}`}>{serviceTitle}</h3>
        <div className="flex flex-row gap-3 mt-6 text-lg mmd:text-xl">
          <h4 className="mt-3">{startDate && startDate !== '' && startDate + ','}</h4>
          <h4 className="mt-3">{capacity && capacity !== '' && capacity}</h4>
        </div>
          <>
          {sectionImg && <img src={sectionImg} className="w-1/6 float-right -scale-x-100" alt="graphic" />}
            {frequency && <h4 className="mt-3 text-lg md:text-xl" dangerouslySetInnerHTML={{__html: frequency}}/>}
            {details && details.map((detail, idx) => (
              <p key={idx} className="mt-3 indent-5 text-lg md:text-xl font-medium text-slate-900" dangerouslySetInnerHTML={{__html: detail}} />
          ))}
          </>
        
        {hasLessonVideo && (
          <div className="w-full h-[400px] lg:h-[550px] mt-10">
            {lessonVideo} {/* Assuming the lessonVideo prop is a valid JSX element */}
          </div>
        )}

        {hasProjectsList && (
          <ul className="mt-10 w-full">
            {projectsList && projectsList.map((project, idx) => (
              <li key={idx} className="mt-3 text-lg md:text-xl font-medium text-slate-900">{project}</li>
            ))}
          </ul>
        )}
        {hasOtherList && (
          <>
            {otherList.map((item, idx) => (
              <div key={idx} className="mt-12">
                <h4 className="text-2xl font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-lg md:text-xl font-medium text-slate-900">{item.detail}</p>
                {item.imgURL && (
                  <div className="w-full mt-10 flex justify-center">
                    <img src={item.imgURL} alt={item.title} className="w-1/2 xl:w-1/3"/>
                  </div>
                  )}
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
  
  
  
  
  
  