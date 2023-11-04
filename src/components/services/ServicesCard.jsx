import Reviews from "../kansou/Reviews";
import ImgReviews from "../kansou/ImgReviews";

export default function ServicesCard({ serviceTitle, startDate, capacity, frequency, details, projectsList, materialsUrl, signupFormUrl, lessonVideo, feedback, otherList, feedbackImgURL, adviceReportExample, sectionImg, currentIdx }) {
    const hasLessonVideo = lessonVideo && lessonVideo !== '';
    const hasProjectsList = projectsList && projectsList.length > 0;
    const hasOtherList = otherList && otherList.length > 0;
    const hasFeedbackImgURL = feedbackImgURL && feedbackImgURL.length > 0;
    const hasAdviceReportExample = adviceReportExample && adviceReportExample.length > 0;

    const titleColors = [
      'text-red-600',
      'text-orange-600',
      'text-yellow-600',
      'text-green-600',
      'text-emerald-600',
      'text-teal-600',
      'text-cyan-600',
      'text-blue-600',
      'text-indigo-600',
      'text-fuchsia-600',
      'text-pink-600'
    ]
  
    return (
      <div>
        <h3 className={`${titleColors[currentIdx]}`}>{serviceTitle}</h3>
        {(startDate || capacity) && <div className="flex flex-col gap-3 mt-6">
          {startDate !== '' && <p>{startDate}</p>}
          {capacity !== '' && <p>{capacity}</p>}
        </div>}
          <>
          {sectionImg && <img src={sectionImg} className="w-[20%] inline-block float-right md:w-[15%] -scale-x-100" alt="graphic" />}
            {frequency && <p className="mt-3 font-medium text-slate-900" dangerouslySetInnerHTML={{__html: frequency}}/>}
            {details && details.map((detail, idx) => (
              <p key={idx} className="mt-3 indent-5 text-lg lg:text-xl font-medium text-slate-900" dangerouslySetInnerHTML={{__html: detail}} />
          ))}
          {materialsUrl && signupFormUrl && (
            <div className="mt-4 w-full flex flex-col gap-2 justify-evenly text-lg lg:text-xl">
              <p>資料⇩</p>
              <a href="materialsUrl" className="font-medium cursor-pointer break-words">https://docs.google.com/presentation/d/1CTzvWT_FCd9eYWW-Jbi8otbJTJZ7BYcbM5fsOI69Z6Q/edit?usp=sharing</a>
              <p>お申し込みフォーム⇩</p>
              <a href="signupFormUrl" className="font-medium cursor-pointer break-words">https://forms.gle/2EoT399odh8JHZCj7</a>
            </div>
          )}
          </>
        
        {hasLessonVideo && (
          <div className="w-full flex justify-center">
            <div className="w-full h-[175px] md:h-[400px] md:w-[600px] mt-6">
              {lessonVideo} {/* Assuming the lessonVideo prop is a valid JSX element */}
            </div>
          </div>
        )}

        {hasProjectsList && (
          <ul className="w-full">
            {projectsList && projectsList.map((project, idx) => (
              <li key={idx} className="mt-3 text-lg md:text-xl font-medium text-slate-900">{project}</li>
            ))}
          </ul>
        )}
        {hasOtherList && (
          <>
            {otherList.map((item, idx) => (
              <div key={idx}>
                <h4>{item.title}</h4>
                <p className="mt-2 text-lg md:text-xl font-medium text-slate-900">{item.detail}</p>
                {item.imgURL && (
                  <div className="w-full mt-6 flex justify-center">
                    <img src={item.imgURL} alt={item.title} className="md:w-1/2 xl:w-1/3"/>
                  </div>
                  )}
                {item.feedback && <ImgReviews feedback={item.feedback} />}
              </div>
            ))}
          </>
        )}
        {hasFeedbackImgURL && hasAdviceReportExample && (
          <div className="w-full flex flex-col md:flex-row justify-evenly mt-10">
            <div className="md:w-[40%]">
              {feedbackImgURL.map((url, idx) => (
                  <img src={url} alt={'chat feedback screenshots'} key={idx}/>
                ))
              }
            </div>
            <div className="md:w-[35%]">
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
  
  
  
  
  
  